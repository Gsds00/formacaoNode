//REquiring module
const express = require('express');

//Creating express object
const app = express();

////Handling GET request
app.get('/', (req, res) => {
    res.send('A api esta funcionando '+ 'neste servidor ')
    res.end()
})

////Handling GET request
app.get('/retorno', (req, res) => {
    res.send('Nodejs é facil.')
    res.end()
})
    
//port Number
const PORT = process.env.PORT ||5000;

//Server setup
app.listen(PORT,console.log(`Server started on port${PORT}`));