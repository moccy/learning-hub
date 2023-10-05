#!/bin/bash

# Define the path to the directory containing subtopics.json files
SUBTOPICS_DIR="./lib/data/learning"

# Iterate through each subtopics.json file in the directory
for SUBTOPICS_FILE in $(find $SUBTOPICS_DIR -name "subtopics.json"); do
    # Extract the directory of the current subtopics.json
    DIRNAME=$(dirname $SUBTOPICS_FILE)
    
    # Extract the subtopic slugs and create a markdown file for each slug
    cat $SUBTOPICS_FILE | jq -r '.[].slug' | while read SLUG; do
        # Define the path for the markdown file
        MARKDOWN_FILE="$DIRNAME/$SLUG.md"
        
        # Check if the markdown file already exists
        if [ ! -f "$MARKDOWN_FILE" ]; then
            # Create an empty markdown file
            touch $MARKDOWN_FILE
            echo "Created $MARKDOWN_FILE"
        else
            echo "$MARKDOWN_FILE already exists"
        fi
    done
done
