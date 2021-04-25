#!/bin/sh
set -e

TYPEORM="node_modules/.bin/ts-node -P apps/api/tsconfig.typeorm.json node_modules/.bin/typeorm"

if [ "$1" = 'node' ];
then
	echo "Waiting for db to be ready..."
	ATTEMPTS_LEFT_TO_REACH_DATABASE=60
	until [ $ATTEMPTS_LEFT_TO_REACH_DATABASE -eq 0 ] || $TYPEORM query "SELECT 1" > /dev/null 2>&1; do
		sleep 1
		ATTEMPTS_LEFT_TO_REACH_DATABASE=$((ATTEMPTS_LEFT_TO_REACH_DATABASE-1))
		echo "Still waiting for db to be ready... Or maybe the db is not reachable. $ATTEMPTS_LEFT_TO_REACH_DATABASE attempts left"
	done

	if [ $ATTEMPTS_LEFT_TO_REACH_DATABASE -eq 0 ]; then
		echo "The db is not up or not reachable"
		exit 1
	else
	   echo "The db is now ready and reachable"
	fi

	if ls -A apps/api/src/migrations/*.ts > /dev/null 2>&1; then
	    $TYPEORM migration:run
	fi
fi

exec "$@"