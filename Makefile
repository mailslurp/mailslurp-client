node_modules:
	yarn install

test: node_modules
	#yarn run test

build: test
	yarn run build

deploy: build
	npm publish

