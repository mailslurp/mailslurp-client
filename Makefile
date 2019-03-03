node_modules:
	yarn install

test: node_modules
	yarn run test

build: test
	yarn run build
	rm -rf docs
	yarn run docs

deploy: build
	npm publish

