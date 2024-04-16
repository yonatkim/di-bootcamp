const knex = require("knex");

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '31Kim@9y',
        database: 'knex',
        port: '5432', 
    }
});

async function getData() {
    const ver = `select version()`
    const result = await db.raw(`select * from products where id = 2`)
    console.log(result.rows[0]);
}

getData();