#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
echo "SCRIPT_DIR: $SCRIPT_DIR"

# remove all markdown files in ../content/events/new and ../content/events/old
rm $SCRIPT_DIR/../content/events/new/*.md
rm $SCRIPT_DIR/../content/events/old/*.md

ts-node --compiler-options {\"module\":\"CommonJS\"} $SCRIPT_DIR/generateDocs.ts 
