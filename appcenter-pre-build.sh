#!/usr/bin/env bash

# Make a copy of .env.dist
echo "Updating version name"
echo " - Version Name : $MAJOR_VERSION.$MINOR_VERSION.$PATCH_VERSION-$PRE_RELEASE"

cd ${APPCENTER_SOURCE_DIRECTORY}

cp .env.dist .env

envFile=$APPCENTER_SOURCE_DIRECTORY/.env

# Replace environment variables
sed -i 's/MAJOR_VERSION=.*/MAJOR_VERSION=$MAJOR_VERSION/' $envFile
sed -i 's/MINOR_VERSION=.*/MINOR_VERSION=$MINOR_VERSION/' $envFile
sed -i 's/PATCH_VERSION=.*/PATCH_VERSION=$PATCH_VERSION/' $envFile
sed -i 's/PRE_RELEASE=.*/PRE_RELEASE=$PRE_RELEASE/' $envFile
