// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAll(){
    return db('resources');
}

function getById(id){
    return db('resources').where('resource_id', id);
}

async function create(resource){
    let [id] = await db('resources').insert(resource);
    return{
        id,
        ...resource
    }
}

module.exports = {
    getAll,
    getById,
    create
}
