#!/usr/bin/env bash

# settings
path=$( readlink -f $( dirname  $0 ) )
path=$( readlink -f "${path}/.." )
src_file="${path}/patget.js"
dst_file="${path}/patget-min.js"

# convert to bookmarklet
cat <( echo 'javascript:{' ) \
    "$src_file" \
    <( echo '}; voild(0);' ) | \
    tr '\n' ' ' | \
    tr -s ' ' > \
    "$dst_file"

