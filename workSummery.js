"use strict";
tasks = [
    {
        startedAt: new Date(2021, 0, 22, 10,),
        finishedAt: new Date(2021, 0, 22, 13, 15,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: "HTML basics"
    },
    {
        startedAt: new Date(2021, 0, 20, 23,),
        finishedAt: new Date(2021, 0, 21, 3,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: ""
    },
    {
        startedAt: new Date(2021, 0, date, hours, minutes,),
        finishedAt: new Date(2021, 0, date, hours, minutes,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: " "
    },
    {
        startedAt: new Date(2021, 0, date, hours, minutes,),
        finishedAt: new Date(2021, 0, date, hours, minutes,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: " "
    },
    {
        startedAt: new Date(2021, 0, date, hours, minutes,),
        finishedAt: new Date(2021, 0, date, hours, minutes,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: " "
    },
    {
        startedAt: new Date(2021, 0, date, hours, minutes,),
        finishedAt: new Date(2021, 0, date, hours, minutes,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: " "
    },
    {
        startedAt: new Date(2021, 0, date, hours, minutes,),
        finishedAt: new Date(2021, 0, date, hours, minutes,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: " "
    },
    task8 = {
        startedAt: new Date(2021, 0, date, hours, minutes,),
        finishedAt: new Date(2021, 0, date, hours, minutes,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: " "
    },
    {
        startedAt: new Date(2021, 0, date, hours, minutes,),
        finishedAt: new Date(2021, 0, date, hours, minutes,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: " "
    },
    {
        startedAt: new Date(2021, 0, date, hours, minutes,),
        finishedAt: new Date(2021, 0, date, hours, minutes,),
        tasksGiven: 0,
        tasksFinished: 0,
        topic: " "
    }];

for (let task of tasks) {
    task.tasksGiven = Math.floor(Math.random() * 20 + 1);
    task.tasksFinished = Math.floor(Math.random() * task.tasksGiven + 1);
}
for (let task of tasks) {
    alert(task.tasksFinished + ' out of: ' + task.tasksGiven);
}