# README.md is generated so edit template instead

.PHONY: docs test

SPEC_URL=/tmp/swagger.json

node_modules:
	npm install

bin/openapi-generator-cli.jar:
	mkdir -p bin
	wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.2.1/openapi-generator-cli-5.2.1.jar -O bin/openapi-generator-cli.jar

test: node_modules
	API_KEY=$(API_KEY) npm run integration

spec:
	aws s3 cp s3://api-spec.mailslurp.com/swagger.json $(SPEC_URL)

generate: spec bin/openapi-generator-cli.jar
	sudo rm -rf src/generated
	mkdir -p src/generated
	java -jar ./bin/openapi-generator-cli.jar generate \
		--input-spec $(SPEC_URL) \
		--generator-name typescript-fetch \
	    --skip-validate-spec \
		--output src/generated -p 'enumPropertyNaming=original,typescriptThreePlus=true,useSingleRequestParameter=true'

generate-local:
	SPEC_URL="~/projects/ms2/ms2-api/build/swagger/swagger.json" $(MAKE) generate

fmt: node_modules
	npm run fmt

build: node_modules
	npm run build

docs: node_modules
	npm run build
	rm -rf docs
	rm -rf docs-html
	npm run docs
	npm run docs:html

docs-lint: node_modules
	# fix bad links in docs
	#	cd docs && find . -type f -name "*.md" -print0 | xargs -0 sed -i'' -e 's/#### Index signature//g' && cd -
	#	cd docs && find . -type f -name "*.md" -print0 | xargs -0 sed -i'' -e 's/\[key: `string`\]:/key/g' && cd -
	#npm run docs:lint

docs-test:
#	NODE_BIN=$(PWD)/node_modules/.bin OUTPUT_DIR=$(PWD)/docs $(PWD)/scripts/lint.sh

readme: node_modules
	DEBUG=script* npm run readme

tag:
	git tag v$$(node -e 'console.log(require("./package.json").version)') -a
	git push origin --tags

# manually bump package version first
deploy: generate fmt build docs docs-lint docs-test readme test
	npm publish
	$(MAKE) tag

download-hyperlink:
	curl --output scripts/hyperlink -L https://github.com/untitaker/hyperlink/releases/download/0.1.17/hyperlink-linux-x86_64
	chmod +x scripts/hyperlink
