const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = {
    siteMetadata: {
        siteUrl: `https://domainname.tld`,
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