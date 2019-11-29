const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const timePrice = tasks.reduce((accum, task) => {
    if (task.category === 'Frontend') {
        return accum + task.timeSpent;
    }
    else {
    return accum;
    }
}, 0);
console.log(timePrice);

const timeBug = tasks.reduce((accum, task) => {
    if (task.type === 'bug') {
        return accum + task.timeSpent;
    }
    else {
        return accum;
    }
}, 0);
console.log(timeBug);

const UITask = tasks.filter(task => task.title.includes('UI'));
console.log(UITask.length);

const objectTask = tasks.reduce((accum, task) => {
    accum[task.category]++;
    return accum
}, {Frontend: 0, Backend: 0});
console.log(objectTask);

const newTasks = tasks
    .filter(task => task.timeSpent > 4)
    .map(task => ({title:task.title,category:task.category}));

console.log(newTasks);

