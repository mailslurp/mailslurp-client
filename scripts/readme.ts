/**
 * Readme building script
 *
 * Takes templates/README.tpl.md
 * Reads special comments in `test/*.use.ts` files and extract code blocks
 * ```
 * //<gen>block_name
 * Code here
 * //</gen>
 * ```
 * Replaces `{{block_name}}` in README tpl with the content of the block
 * Writes over <rootDir>/README.md
 */
import debug from 'debug';
import * as fs from 'fs'
import { join } from "path";
import glob from "fast-glob";
const log = debug("script/readme")
const commentStart='\/\/<gen>'
const commentEnd='\/\/</gen>'
import { diff } from "jest-diff"

function minIndent(inp: string) {
	const match = inp.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return 0;
	}

	return match.reduce((r, a) => Math.min(r, a.length), Infinity);
}

function stripIndent(inp: string) {
	const indent = minIndent(inp);

	if (indent === 0) {
		return inp;
	}

	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return inp.replace(regex, '');
}

async function getFileContent(path: string): Promise<string> {
    const content = await fs.promises.readFile(path, { encoding: 'utf-8'} )
    return content.toString()
}

async function checkFile(content: string) {
    const startCount = (content.match(new RegExp(commentEnd, 'gm')) || []).length
    const endCount = (content.match(new RegExp(commentEnd, 'gm')) || []).length
    if(startCount !== endCount) {
        throw Error(`Expected matching start and end comments ${startCount} ${endCount}`)
    }
}


async function getGenBlocks(content: string): Promise<{ id: string, body: string }[]> {
    const pKeys = new RegExp(`${commentStart}([0-9a-zA-Z_]*)`, 'g')
    const matchKeys =  [...content.matchAll(pKeys)]
    return [].concat(...matchKeys.map(([_, key]) => {
        const pBlock =  new RegExp(`${commentStart}${key}[\\r\\n]*([\\s\\S]+)${commentEnd}`, 'g')
        log(`Key ${key} match ${pBlock}`)
        const blocks = [...content.matchAll(pBlock)]
        log(`Found ${blocks.length} block for ${key}`)
        return blocks.map(it => {
            log(`Inside ${key} block with ${it.length} params` )
            const [_,body] = it
            return { id: key, body: stripIndent(body.split(commentEnd)[0])}
        })
    }))
}

(async () => {

    // *.use.ts test classes have a special comment -> //<gen>inbox_send ----> //</gen>
    const useCases: string[] = await glob([join(__dirname,'../test/*.use.ts'),join(__dirname,'../test/integration.spec.ts')])
    const blockMap: any = {};
    for(const useCase of useCases) {
        log(`Get content for ${useCase}`)
        const content = await getFileContent(useCase)
        log(`Check file ${useCase}`)
        await checkFile(content)
        log(`Generate blocks ${useCase}`)
        const blocks = await getGenBlocks(content)
        log(`${blocks.length} blocks found`)
        for (const block of blocks) {
            log(`Writing block ${block.id}`)
            blockMap[block.id] = block.body
        }
    }

    log("Now get template and join")
    let templateReadme = await getFileContent(join(__dirname, '../templates/README.tpl.md'))
    const variables = new RegExp('\\{\\{([a-zA-Z_]*)\\}\\}', 'g')
    const names: string[] = Array.from(new Set(Array.from(templateReadme.matchAll(variables)).map(([_,name]) => name).sort()).keys()).map(it => it.toString())
    log("Found variable names " + names)

    const definedNames: string[] = Object.keys(blockMap).sort()

    log("Check out")
    if (JSON.stringify(definedNames)!=JSON.stringify(names)) {
        throw new Error(`Defined names and template names do not match: `  + diff(definedNames,names))
    }

    for (const [key, value] of Object.entries(blockMap)){
        log(`Replace key in template`)
        templateReadme = templateReadme.replace(new RegExp('{{' + key + '}}', 'g'), (value as string).replace(/\n+$/, "") )
    }
    log("Check readme")
    if (templateReadme.indexOf('//</gen>') > -1) {
        throw new Error(`README contains an unprocessed end comment //</gen>`)
    }

    log("Finished, write readme")
    await fs.promises.writeFile(join(__dirname, "../README.md"), templateReadme, { encoding: 'utf-8'})


})().catch(err => {
    log(`ERROR: ${err}`, err)
    process.exit(1)
});

export {}