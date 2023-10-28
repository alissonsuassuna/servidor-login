const express = require('express')
const cors = require('cors')
const mySql = require('mysql')

const app = express()
app.use(cors())
const port = 5000

//Config mysql
const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'db-login'
})

//verificão de banco
/*db.connect((error) => {
    if(error) {
        console.log('NÃO CONECTOU')
    }else {
        console.log('Deu certo a conexão')
    }
})*/

app.get('/', (request, response) => {
    const sql = 'SELECT * FROM clients;'

    db.query(sql, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            response.json(result)
        }
    })

})

app.listen(port, () => {
    console.log('servidor no ar')
})