const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const productionWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: []
});

module.exports = new Promise((resolve, reject) => {
  resolve(productionWebpackConfig);
});
