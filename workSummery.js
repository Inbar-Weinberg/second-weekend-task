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

// Inserts random values to tasks array.
setUpTasks(tasks);

// Adds properties tasksFinishedPercent and totalTime to every object in tasks
addProperties(tasks)

// Inserts the desired html in to index.html
insertTable(tasks);

function insertTable(tasks) {
    let body = document.body;
    let table = document.createElement('table');
    implantHeader()
    function implantHeader(){
        body.prepend(table);//insert table to the beginning of <body>
        table.insertAdjacentHTML('afterbegin',
            '<caption>Summery of Work Done</caption>'
            + '<thead><tr>'
            + '<th>Topic</th>'
            + '<th>Started At</th>'
            + '<th>Finished At</th>'
            + '<th>Total Hours Spent</th>'
            + '<th>Tasks Given</th>'
            + '<th>Tasks Finished</th>'
            + '<th>Tasks Finished %</th>'
            + '</tr></thead>'
        );
    }
    let tBody = document.createElement('tbody');
    table.append(tBody);//insert <tbody> to the end of <table>

    for (let task of tasks) {
        let startDate, startHour, endDate, endHour;
        stringifyDate()
        let timeScale = task.totalTime * 100 / 25; // the percentage from the maximum of 25 hours that the task took
        timeScale = 80 - (65 * timeScale / 100); // reduce the difference between min and max for styling.
        implantTasks()
        function stringifyDate() {
            startDate = task.startedAt.getDate() + "/" + task.startedAt.getMonth() + 1 + "/" + task.startedAt.getFullYear();
            startHour = task.startedAt.getHours() + ":";
            startHour += (task.startedAt.getMinutes() > 9) ? + task.startedAt.getMinutes() : "0" + task.startedAt.getMinutes();

            endDate = task.finishedAt.getDate() + "/" + task.finishedAt.getMonth() + 1 + "/" + task.finishedAt.getFullYear();
            endHour = task.finishedAt.getHours() + ":";
            endHour += (task.finishedAt.getMinutes() > 9) ? + task.finishedAt.getMinutes() : "0" + task.finishedAt.getMinutes();
        }
        function implantTasks() {
            tBody.insertAdjacentHTML('beforeend',
                '<tr>'
                + '<td>' + task.topic + '</td>'
                + '<td>' + startDate + '<br>at: ' + startHour + '</td>'
                + '<td>' + endDate + '<br>at: ' + endHour + '</td>'
                + '<td style="background-color: hsl(231, 71%, ' + timeScale + '%);">' + task.totalTime + '</td>'
                + '<td>' + task.tasksGiven + '</td>'
                + '<td>' + task.tasksFinished + '</td>'
                + '<td style="background-color: hsl(' + task.tasksFinishedPercent + ', 100%, 40%);">' + task.tasksFinishedPercent + '</td>'
                + '</tr>'
            );
        }

    }
}

function setUpTasks(tasks) {
    for (let task of tasks) {
        let startHour = Math.floor(Math.random() * 11 + 12); // start working a 12:00
        let startMinute = Math.floor(Math.random() * 59);

        let endHour = Math.floor(Math.random() * 23);
        let endMinute = Math.floor(Math.random() * 59);

        let startDay = Math.floor(Math.random() * 31 + 1);
        let endDay = (startHour >= endHour) ? startDay + 1 : startDay;
        // If endHour is after startHour (or in the same hour) it must be on the next day.
        // maximum amount of time for a single job is 25 hours
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


