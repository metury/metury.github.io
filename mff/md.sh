#!/bin/bash

#!/bin/bash

set -ueo pipefail

for file in *; do
	if [[ $file == *.md ]]; then
		html=$( echo $file | sed 's/\.md/\.html/g' )
		pdf=$( echo $file | sed 's/\.md/\.pdf/g')
		pandoc $file -o $html
		pandoc $file -o $pdf
	fi
done
