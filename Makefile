node_modules:
	npm install

test: node_modules
	npm run test

build: test
	npm run build
	rm -rf docs
	npm run docs
	rm -rf docs/classes/_node_modules__types*
	rm -rf docs/modules/_node_modules__types*
	rm -rf docs/modules/_node_modules_jest*
	rm -rf docs/interfaces/_node_modules__types*
	cp config/DOC.md docs/README.md

# manually bump package version first
deploy: build
	npm publish

