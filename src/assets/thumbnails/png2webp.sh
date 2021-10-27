#!/usr/bin/env bash

for file in *.png
do
    cwebp -q 69 "$file" -o "${file%.png}.webp"
done
