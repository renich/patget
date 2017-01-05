build:
	utils/minify.bash

clean:
	rm patget-min.js

all: clean build
