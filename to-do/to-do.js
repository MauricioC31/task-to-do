const fs = require('fs');

let listToDo = [];

const saveDb = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('The file hasnt save', err);
        console.log('The file has been saved!');
    });
};
const readDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
};
const create = (description) => {
    readDB();
    let toDo = {
        description,
        complete: false
    };

    listToDo.push(toDo);
    saveDb();
    return toDo;
};
const getList = () => {
    readDB();
    return listToDo;
};
const update = (description, complete = true) => {
    readDB();
    let index = listToDo.findIndex(task => task.description === description);
    if (index >= 0) {
        listToDo[index].complete = complete;
        saveDb();
        return true;
    } else {
        return false;
    }
};
const deleted = (description) => {
    readDB();
    let index = listToDo.findIndex(task => task.description === description);
    if (index >= 0) {
        listToDo.splice(index, 1);
        saveDb();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    create,
    getList,
    update,
    deleted
}