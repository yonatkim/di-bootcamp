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
    const result = await db.raw(`select * from products where id = 5`)
    console.log(result.rows[0]);
}

getData();

// query builder promise
db('products')
/*.insert([
    {name:'sumsung A50', price:888},
    {name:'sumsung flip', price:1300}], ['id'])
.returning('*')
.update({name: 'iPhone14', price:777}, ['id', 'name', 'price'])
.where({id:5})
.where({id:6})
.del() */
.then((data) => {
    console.log(data);
})
.catch((e) => {
    console.log(e);
});

db('products')
.select('price', 'name')
// .where({id: 3})
.orderBy('name')
.then((data) => {
    console.log(data);
})
.catch((e) => {
    console.log(e);
});
