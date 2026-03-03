install:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .

.PHONY: install brain-games lint