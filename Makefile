.PHONY: docs test

ifeq ($(SPEC_URL),)
SPEC_URL := https://api.mailslurp.com/v2/api-docs
endif

node_modules:
	npm install

bin/openapi-generator-cli.jar:
	mkdir -p bin
	wget https://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.12/swagger-codegen-cli-2.4.12.jar -O bin/openapi-generator-cli.jar

test: node_modules
	API_KEY=$(API_KEY) npm run integration

generate: bin/openapi-generator-cli.jar
	sudo rm -rf src/generated
	mkdir -p src/generated
	java -jar ./bin/openapi-generator-cli.jar generate \
		--input-spec $(SPEC_URL) \
		--lang typescript-fetch \
		--output src/generated
	rm src/generated/git_push.sh

generate-local:
	SPEC_URL="~/projects/ms2/ms2-api/build/swagger/swagger.json" $(MAKE) generate

fmt: node_modules
	npm run fmt

build: node_modules
	npm run build

docs: node_modules
	npm run build
	rm -rf docs
	npm run docs

docs-lint: node_modules
	npm run docs:lint

# manually bump package version first
deploy: generate fmt build docs test
	npm publish

