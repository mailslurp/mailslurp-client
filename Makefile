.PHONY: docs

node_modules:
	npm install

test: node_modules
	npm run test

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

