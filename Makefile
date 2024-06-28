install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	npm run test
watch:
	npm run test -- --watch
test-coverage:
	npm test -- --coverage --coverageProvider=v8
publish:
	npm publish
