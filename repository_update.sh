#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
USER="root"
COMMAND="cd $DIR \
&& git pull origin master \
&& npm install \
&& npm run build "
echo `date` Execute as $USER: $COMMAND
sudo -u ${USER} -- bash -c "$COMMAND"
