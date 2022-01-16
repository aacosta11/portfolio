const sendContactInfo = {
    name: "adrian acosta",
    email: "aacosta@aa11.dev",
    phone: "562.228.5277"
}

module.exports = app => {
    app.get("/api/contact", function(req,res) {res.json(sendContactInfo)});
}
