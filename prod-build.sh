#!/bin/bash

# Extract the version number using cat, grep, and awk
version=$(cat package.json | grep -o '"version": *"[^"]*"' | awk -F ':' '{print $2}' | tr -d '"' | tr -d ' ')

echo "Version number: $version"
npm install
cd src/helpers/apiIntegration
awk '{gsub(/export const host = stagingHost;/, "export const host = productionHost;")}1' config.js > tmpfile && mv tmpfile config.js
cd ../../../android
./gradlew clean
./gradlew assembleRelease
cd ../
git checkout src/helpers/apiIntegration/config.js
mkdir -p releaseBuilds
mv android/app/build/outputs/apk/release/app-release.apk releaseBuilds/genus-wfm-$version.apk