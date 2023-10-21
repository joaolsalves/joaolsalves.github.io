const express = require('express');
const app = express();

//config
const PORT = process.env.PORT || 3000;

// GET, POST, PUT, DELETE
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(PORT, ()=>{
console.log(`Servidor rodando em http://localhost:${PORT}`);
});