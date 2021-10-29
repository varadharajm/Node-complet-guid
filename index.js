const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const Routes = require("./app/routes/user.route");
// DB connection 
const db = require("./app/models/index");
db.mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    console.log("databasc connected successfully");
}).catch(error =>{
    console.log("something error to connect db. The error is : ",error);
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',Routes);

const listener = app.listen(process.env.PORT || PORT , () =>{
    console.log("server is runing on : ",listener.address().port);
})