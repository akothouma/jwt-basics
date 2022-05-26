const  express = require("express")
const mainRouter= require("./routes/main.js");
const app=express();
const port=process.env.PORT||3000;

app.use("/api/v1/",mainRouter);
app.use(express.json());
app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`)
})

