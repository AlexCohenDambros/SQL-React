const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: "basedados",
});

app.post('/create', (req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    const cidade = req.body.cidade;
    const universidade = req.body.universidade;
    const estado = req.body.estado;

    db.query('INSERT INTO basedados.table (nome, email, cidade, universidade, estado) VALUES (?,?,?,?,?)', 
    [nome, email, cidade, universidade, estado], (err, result) =>{
        if (err){-
            console.log(err);
        }else{
            res.send("Values Inserted");
        }
    });
});

app.listen(3001, ()=>{
    console.log("Yes")
})