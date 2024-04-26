install: 
	npx simple-git-hooks
setup :
	npm ci
	npm i --save-dev jest
test:
	npx stryker run
	npm test
lint:
	npx eslint . --fix
index:
	  npm test -- index
qeight:
	  npm test -- q8
qseven:
	  npm test -- q7
qsix:
	  npm test -- q6
qfive:	
	  npm test -- q5