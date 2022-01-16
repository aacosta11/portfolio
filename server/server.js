const express = require("express");
const app = express();
const port = 3000;

app.use(express.json(),express.urlencoded({extended:true}));

require("./routes/api")(app);

app.listen(port,()=>console.log(`server is running on port: ${port}`));
