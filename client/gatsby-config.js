const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = {
    siteMetadata: {
        title: "aacosta11",
        siteUrl: `www.aa11.dev`,
        description: "ReactJS Developer"
    },
    developMiddleware: app => {
        app.use(
            "/api/",
            createProxyMiddleware({
                target: "http://localhost:3000"
            })
        )
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp"
    ]
}