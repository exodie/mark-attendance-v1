#!/bin/bash

COMMIT_MESSAGE=$(git log -1 --pretty=%B)
REPO_NAME=$(basename -s .git `git config --get remote.origin.url`)

MESSAGE="Новое изменение в репозитории $REPO_NAME! Сообщение: $COMMIT_MESSAGE"

curl -s -X POST \
  https://api.telegram.org/bot6710558601:AAEmZ5WhpQyTJ2DMUnJD-GsQ4MiAVq_4RIE/sendMessage \ 
  -d chat_id=-1001926355641 \ 
  -d text="$MESSAGE" \ 
  -d message_thread_id=10
