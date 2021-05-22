#!/usr/bin/env bash

# Make a copy of .env.dist
cp .env.dist .env

# Replace environment variables
sed -i 's/MAJOR_VERSION=.*/MAJOR_VERSION=${MAJOR_VERSION}/' .env
sed -i 's/MINOR_VERSION=.*/MINOR_VERSION=${MINOR_VERSION}/' .env
sed -i 's/PATCH_VERSION=.*/PATCH_VERSION=${PATCH_VERSION}/' .env
sed -i 's/PRE_RELEASE=.*/PRE_RELEASE=${PRE_RELEASE}/' .env
