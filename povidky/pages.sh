#!/bin/bash

set -ueo pipefail

for file in *; do
	if [[ $file == *.md ]]; then
		html=$( echo $file | sed 's/\.md/\.html/g' )
		pandoc $file -o $html
	fi
done
