.PHONY: docs test

SPEC_URL=/tmp/swagger.json

node_modules:
	npm install

bin/openapi-generator-cli.jar:
	mkdir -p bin
	wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.1.0/openapi-generator-cli-5.1.0.jar -O bin/openapi-generator-cli.jar

test: node_modules
	API_KEY=$(API_KEY) npm run integration

spec:
	aws s3 cp s3://api-spec.mailslurp.com/swagger.json $(SPEC_URL)

generate: spec bin/openapi-generator-cli.jar
	sudo rm -rf src/generated
	mkdir -p src/generated
	java -jar ./bin/openapi-generator-cli.jar generate \
		--additional-properties='useSingleRequestParameter=true' \
		--input-spec $(SPEC_URL) \
		--skip-validate-spec \
		--generator-name typescript-fetch \
		--output src/generated

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

