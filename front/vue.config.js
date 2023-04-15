const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/travelmuseum/" : "/",
};

module.exports = {
  devServer: {
    headers: { "Cache-Control": "no-cache, no-store, must-revalidate", "X-Content-Type-Options": "nosniff" }
  }
}