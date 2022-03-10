const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  name: 'core',
  output: {
    uniqueName: "core",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
     remotes: {
       dashboard: "dashboard@http://localhost:3001/remoteEntry.js"
     },

      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};
