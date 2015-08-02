git_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d'-e's/* \(.*\)/\1/')
npm_bin= $$(npm bin)

all: test
install:
	@npm install
build:
	@${npm_bin}/webpack
watch:
	@${npm_bin}/webpack --watch
pull:
	@git pull origin ${git_version}
push:
	@git push origin ${git_version}
lint:
	@${npm_bin}/eslint src
server: install
	@${npm_bin}/startserver
.PHONY: test
