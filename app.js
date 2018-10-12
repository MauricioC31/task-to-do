//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = toDo.getList();
        for (let task of list) {
            console.log('======To Do======='.green);
            console.log(task.description);
            console.log('State: ', task.complete);
            console.log('=================='.green);
        }
        break;
    case 'update':
        let updated = toDo.update(argv.description, argv.complete);
        console.log(updated);
        break;
    case 'delete':
        let deleted = toDo.deleted(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Commnad not valid');
        break;
}