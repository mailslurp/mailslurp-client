.PHONY: docs test

SPEC_URL=https://api.mailslurp.com/v2/api-docs

node_modules:
	npm install

bin/openapi-generator-cli.jar:
	mkdir -p bin
	wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/4.2.3/openapi-generator-cli-4.2.3.jar -O ./bin/openapi-generator-cli.jar

test: node_modules
	npm run integration

generate: bin/openapi-generator-cli.jar
	sudo rm -rf src/generated
	mkdir -p src/generated
	java -jar ./bin/openapi-generator-cli.jar generate \
		--input-spec $(SPEC_URL) \
		--generator-name typescript-fetch \
		--output src/generated \
		--skip-validate-spec

fmt: node_modules
	npm run fmt

build: node_modules
	npm run build

docs: node_modules
	npm run build
	rm -rf docs
	npm run docs
	cp config/DOC.md docs/README.md

# manually bump package version first
deploy: generate fmt build docs test
	npm publish

