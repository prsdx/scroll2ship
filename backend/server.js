const express = require('express');
const app = express();
const PORT = 3000;

/*
    app.use() is a method to register middleware in an Express app
    if express sent JSON as a request, make sure we parse it and store it nicely in req.body
*/
app.use(express.json());
app.get('/', (req,res) =>{
    res.send("Hi bro");
})
app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
})