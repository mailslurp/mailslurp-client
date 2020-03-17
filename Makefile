.PHONY: docs
SPEC_URL=https://api.mailslurp.com/v2/api-docs

node_modules:
	npm install

setup:
	mkdir -p bin
	wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/4.2.3/openapi-generator-cli-4.2.3.jar -O ./bin/openapi-generator-cli.jar

test: node_modules
	npm run test

generate:
	sudo rm -rf generated
	mkdir -p generated
	java -jar ./bin/openapi-generator-cli.jar generate \
		--input-spec $(SPEC_URL) \
		--generator-name typescript-fetch \
		--output generated \
		--skip-validate-spec


build:
	npm run build

docs: 
	npm run build
	rm -rf docs
	npm run docs
	cp config/DOC.md docs/README.md

# manually bump package version first
deploy: test build docs 
	npm publish

