import debug from 'debug';
import * as fs from 'fs'
import { join } from "path";
import glob from "fast-glob";
const log = debug("script/readme")
const commentStart='//<gen>'
const commentEnd='//</gen>'


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

const matchBlock =  new RegExp(`${commentStart}(.*)[\\r\\n]*([\\s\\S]*)${commentEnd}`, 'g')

async function getGenBlocks(content: string): Promise<{ id: string, body: string }[]> {
    log("Using match " + matchBlock)
    const matches = Array.from(content.matchAll(matchBlock))
    return matches.map(it => {
        const [_,id, body] = it
        return { id, body: stripIndent(body)}
    })
}

(async () => {

    // *.use.ts test classes have a special comment -> //<gen>inbox_send ----> //</gen>
    const useCases: string[] = await glob([join(__dirname,'../test/*.use.ts')])
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
    for (const [key, value] of Object.entries(blockMap)){
        log(`Replace key in template`)
        templateReadme = templateReadme.replace(new RegExp('{{' + key + '}}', 'g'), (value as string).replace(/\n+$/, "") )
    }

    log("Finished, write readme")
    await fs.promises.writeFile(join(__dirname, "../README.md"), templateReadme, { encoding: 'utf-8'})

})();

export {}