#!/usr/bin/env bash
BASEDIR=$(dirname `realpath $BASH_SOURCE`)

echo "=== Running lint on output dir $OUTPUT_DIR and base $BASEDIR"
echo "--- HYPERLINK"

$BASEDIR/hyperlink $OUTPUT_DIR

echo "--- REMARK"
$NODE_BIN/remark --use validate-links --frail $OUTPUT_DIR

echo "--- MARKDOWN_LINT"
$NODE_BIN/markdownlint --fix --config=$BASEDIR/.markdownlint.json $OUTPUT_DIR