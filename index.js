const express = require('express');
const app = express();
const fs = require('fs');

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    fs.readFile('tasks.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading tasks.json');
            return;
        }
        console.log(data);
        console.log(typeof data);
        console.log(data.split('\n'));
        res.render('index', {tasks: tasks})
    });
    const tasks = ['Study HTML', 'Study CSS', 'Study JS', 'Study OOP']
  res.render('index', {tasks: tasks})
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});