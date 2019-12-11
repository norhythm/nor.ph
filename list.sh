#!/bin/sh

# find works -type d -mindepth 1 > list.txt
# sed -e ':a' -e 'N' -e '$!ba' -e 's/\n/\/,/g' list.txt > list2.txt

node screenshot.js
# rmdir -r _site/works/og/