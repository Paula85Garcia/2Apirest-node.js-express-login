// Simulación de una base de datos en memoria
let users = [];

// Simula un modelo de usuario con un método `findOne` y `save`
module.exports = {
    findOne: (query) => {
        return users.find(user => user.username === query.username);
    },
    save: function() {
        users.push(this);
    }
};
