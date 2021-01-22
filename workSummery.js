"use strict";
let tasks = [
    {
        topic: "HTML basics"
    },
    {
        topic: "HTML Forms"
    },
    {

        topic: "Product Landing Page"
    },
    {
        topic: "Personal Portfolio"
    },
    {
        topic: "My Wiki"
    },
    {
        topic: "Java Script Ex-1"
    },
    {
        topic: "Java Script Functions "
    },
    {

        topic: "Java Script Loops"
    },
    {
        topic: "Second Weekend Work"
    },
    {
        topic: "Third Weekend Work"
    }];
// easy setup of tasks array.
setUpTasks(tasks);
addProperties(tasks);
insertTable(tasks);



function insertTable(tasks) {
    let body = document.body;
    let table = document.createElement('table');
    body.prepend(table);//insert table to the beginning of <body>
    table.insertAdjacentHTML('afterbegin',
        '<caption>Summery of Work Done</caption>' +
        '<thead><tr>' +
        '<th class = "headLine" >Started At</th>' +
        '<th class = "headLine">Finished At</th>' +
        '<th class = "headLine">Total Time Spent</th>' +
        '<th class = "headLine">Tasks Given</th>' +
        '<th class = "headLine">Tasks Finished</th>' +
        '<th class = "headLine">Tasks Finished %</th>' +
        '<th class = "headLine">Topic</th>'
        + '</tr></thead>'
    );
    let tBody = document.createElement('tbody');
    table.append(tBody);//insert <tbody> to the end of <table>

    for (let task of tasks) {
        let startDate = task.startedAt.getDate() + "/" + task.startedAt.getMonth() + 1 + "/" + task.startedAt.getFullYear();
        let endDate = task.finishedAt.getDate() + "/" + task.finishedAt.getMonth() + 1 + "/" + task.finishedAt.getFullYear();
        let startHour = task.startedAt.getHours() + ":" + task.startedAt.getMinutes();
        let endHour = task.finishedAt.getHours() + ":" + task.finishedAt.getMinutes();

        let timeScale = task.totalTime * 100 / 24; // percentage of the maximum of 24 hours that the task took
        timeScale=timeScale**(1/2); // reduce the differance between min and max.

        tBody.insertAdjacentHTML('beforeend',
            '<tr>' +
            '<td class = "" >' + startDate + '<br>at: ' + startHour + '</td>' +
            '<td class = "" >' + endDate + '<br>at: ' + endHour + '</td>' +
            '<td style="background-color: hsl(231, 71%,' + timeScale + 10 + '%); >' + task.totalTime + '</td>' +
            '<td class = "" >' + task.tasksGiven + '</td>' +
            '<td class = "" >' + task.tasksFinished + '</td>' +
            '<td class = "" >' + task.tasksFinishedPercent + '</td>' +
            '<td class = "" >' + task.topic + '</td>'
            + '</tr>'
        );
    }

}

function setUpTasks(tasks) {
    for (let task of tasks) {
        let startHour = Math.floor(Math.random() * 11 + 12); // start working a 12:00
        let startMinute = Math.floor(Math.random() * 59);

        let endHour = Math.floor(Math.random() * 23);
        let endMinute = Math.floor(Math.random() * 59);

        let startDay = Math.floor(Math.random() * 31 + 1);
        let endDay = (startHour >= endHour) ? startDay + 1 : startDay; // if end is after start it is on the next day.
        // maximum amount of time for a single job is 24 hours
        task.startedAt = new Date(2021, 0, startDay, startHour, startMinute);
        task.finishedAt = new Date(2021, 0, endDay, endHour, endMinute)
        task.tasksGiven = Math.floor(Math.random() * 20 + 1);
        task.tasksFinished = Math.floor(Math.random() * task.tasksGiven + 1);
    }
}
function addProperties(tasks) {
    for (let task of tasks) {
        calculateTimeOfWork(task);
        calculateTasksFinishedPercent(task);
    }
    function calculateTimeOfWork(task) {
        let timeDifference = task.finishedAt - task.startedAt; // difference is millisecond.
        timeDifference /= 1000; // difference in seconds
        timeDifference /= 60; // difference in minutes
        timeDifference /= 60; // difference in hours
        timeDifference = timeDifference.toFixed(1); // round the number to a max of one decimal. 
        task['totalTime'] = timeDifference; // different writing style for practice.
    }

    function calculateTasksFinishedPercent(task) {
        task.tasksFinishedPercent = Math.floor(task.tasksFinished * 100 / task.tasksGiven);
    }
}


