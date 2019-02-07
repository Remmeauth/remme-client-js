clean:
	rm -r ./node_modules && rm -r ./html
test:
	npm run tests
docs:
	npm run generate-docs
