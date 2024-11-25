const { Client } = require('pg');
const { password, database } = require('pg/lib/defaults');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "12345678",
    database: "SimchaInvitations"
})

client.connect();

client.query(`Select * from users`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})



