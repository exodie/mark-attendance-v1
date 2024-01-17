#!/bin/bash

OWNER="exodie"
REPO="mark-attendance-v1"
BRANCH="main"

API_RESPONSE=$(curl -s "https://api.github.com/repos/$OWNER/$REPO/commits/$BRANCH")

# Extract information about the last commit
COMMIT_MESSAGE=$(echo "$API_RESPONSE" | jq -r '.commit.message')
COMMIT_AUTHOR=$(echo "$API_RESPONSE" | jq -r '.commit.author.name')

# Output information (you can modify this according to your needs)
echo "Commit Author: $COMMIT_AUTHOR"
echo "Commit Message: $COMMIT_MESSAGE"

# Construct the message
MESSAGE="Author: $COMMIT_AUTHOR | Message: $COMMIT_MESSAGE"

# URL encode the message
ENCODED_MESSAGE=$(perl -MURI::Escape -e 'print uri_escape($ARGV[0]);' "$MESSAGE")

# Send the message to Telegram
curl -s -X POST "https://api.telegram.org/bot6710558601:AAEmZ5WhpQyTJ2DMUnJD-GsQ4MiAVq_4RIE/sendMessage" \
  -d "chat_id=-1001926355641" \
  -d "text=$ENCODED_MESSAGE" \
  -d "message_thread_id=10"
