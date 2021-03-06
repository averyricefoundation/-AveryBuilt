const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
// const authRoutes = require("./routes/auth");
// const db = require("./models");
const PORT = 8080;

// app.use (cors());
// app.use(bodyparser.json());


app.use(function(req,res,next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});





app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server now running on port ${PORT}`  )
}) 