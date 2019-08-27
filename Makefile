node_modules:
	npm install

test: node_modules
	npm run test

build: test
	npm run build
	rm -rf docs
	npm run docs

# manually bump package version first
deploy: build
	npm publish

