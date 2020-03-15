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

clean:
	rm -rf docs/classes/_node_modules__type*
	rm -rf docs/modules/_node_modules__type*
	rm -rf docs/interfaces/_node_modules__type*
	rm -rf docs/interfaces/_node_modules_type*
	rm -rf docs/modules/_node_modules_jest*

# manually bump package version first
deploy: test build docs clean 
	npm publish

