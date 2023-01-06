const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");

const domain = process.env.NODE_ENV;
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/marketing/latest/"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap.js"
      },
      shared: packageJson.dependencies
    })
   ]
};

module.exports = merge(commonConfig, prodConfig);
