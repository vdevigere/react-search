
module.exports = {
  entry: {
    search:"./src/search",
    productGrid: "./src/product-grid",
    productThumbnail: "./src/product-thumbnail",
    foundation: "foundation-sites/foundation-sites.scss"
  },
  output: {
    path: __dirname,
    filename: "public/[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};