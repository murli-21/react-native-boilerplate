yarn || npm install  #choose according to you
cd src/helpers/apiIntegration
awk '{gsub(/export const host = stagingHost;/, "export const host = preProductionHost;")}1' config.js > tmpfile && mv tmpfile config.js
cd ../../../android
./gradlew clean
./gradlew assembleRelease
cd ../
git checkout src/helpers/apiIntegration/config.js
mkdir -p releaseBuilds
mv android/app/build/outputs/apk/release/app-release.apk releaseBuilds/genus-wfm-preprod-build.apk