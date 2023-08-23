#!/bin/bash

set -ue pipefail

mff="../Matfyz.markdown"

echo "---
layout: page
title: Mff [CZ]
permalink: /mff/
---

Občas stihnu sepsat nějaké zápisky z přednášky a pokud stojí za to, tak se tady budou nacházet.

## Zápisky
" > $mff

for file in *; do
	if [[ $file == *.md ]]; then
		#html=$( echo $file | sed 's/\.md/\.html/g' )
		pdf=$( echo $file | sed 's/\.md/\.pdf/g')
		#pandoc --katex $file -o $html
		pandoc --katex $file -o $pdf
		name=$(grep "title: " $file | sed 's/title: //g')
		echo "- [$name]($pdf)" >> $mff
	fi
done
