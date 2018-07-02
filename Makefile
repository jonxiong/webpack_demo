include .env
module="swan-webpage"

all: dev

dev:
	sh build.sh
	mkdir -p ./${viewPath}
	cp  ./output/template/swanWebPage/${PAGE}.tpl ./${tplViewPath}
	fis3 release rd -w