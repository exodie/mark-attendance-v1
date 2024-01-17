#!/bin/bash

COMMIT_MESSAGE=$(git log -1 --pretty=%B)
REPOSITORY_NAME=$(basename -s .git `git config --get remote.origin.url`)

TELEGRAM_MESSAGE="Новый коммит в репозитории $REPOSITORY_NAME!
Сообщение коммита: $COMMIT_MESSAGE"

curl -s -X POST https://api.telegram.org/bot6710558601:AAEmZ5WhpQyTJ2DMUnJD-GsQ4MiAVq_4RIE/sendMessage?chat_id=-1001926355641&text=$TELEGRAM_MESSAGE&message_thread_id=10
