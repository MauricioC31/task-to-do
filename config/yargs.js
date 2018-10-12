const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task to do'
};
const complete = {
    default: true,
    alias: 'c',
    desc: 'Check like completed or pending a task to do'
}

const argv = require('yargs')
    .command('create', 'Create element to do', {
        description
    })
    .command('update', 'Update completed state of a task', {
        description,
        complete
    })
    .command('delete', 'delete an element in to do', {
        description
    })
    .help()
    .argv;


module.exports = {
    argv
}