install:
	npm ci

brain-games:
	node bin/brain-games.js

.PHONY: install brain-games