require('dotenv').config();
const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
    const { electronPlatformName, appOutDir } = context;
    const appName = context.packager.appInfo.productFilename;

    if (electronPlatformName !== 'darwin') {
        return;
    }

    return await notarize({
        appBundleId: 'com.jgraph.dfd.desktop',
        appPath: `${appOutDir}/${appName}.app`,
        appleId: process.env.APPLEID,
        appleIdPassword: process.env.APPLEIDPASS,
    });
};