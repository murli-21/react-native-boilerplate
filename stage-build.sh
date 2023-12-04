npm install
git checkout src/helpers/apiIntegration/config.js #change path according to your folder
cd android
./gradlew clean
./gradlew assembleRelease
cd ../
mkdir -p releaseBuilds
mv android/app/build/outputs/apk/release/app-release.apk releaseBuilds/genus-wfm-staging-build.apk