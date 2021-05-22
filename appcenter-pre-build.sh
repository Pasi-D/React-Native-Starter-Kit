#!/usr/bin/env bash

# Make a copy of .env.dist
cp .env.dist .env

echo "Updating version name"
echo " - Version Name : $MAJOR_VERSION.$MINOR_VERSION.$PATCH_VERSION-$PRE_RELEASE"

# Replace environment variables
sed -i 's/MAJOR_VERSION=.*/MAJOR_VERSION=$MAJOR_VERSION/' .env
sed -i 's/MINOR_VERSION=.*/MINOR_VERSION=$MINOR_VERSION/' .env
sed -i 's/PATCH_VERSION=.*/PATCH_VERSION=$PATCH_VERSION/' .env
sed -i 's/PRE_RELEASE=.*/PRE_RELEASE=$PRE_RELEASE/' .env
