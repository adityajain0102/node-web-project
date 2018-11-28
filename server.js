//express is a middle ware you can go through express-js.com for how to wiring middleware and how to use it

const express = require('express');

// After requiring express we need to initiate express as function() and assign it to a const
const app = express();


//to handle file system we require fs module from npm
const fs = require('fs');
//handlebars are used to deal with html pages instead of .html we define .hbs
const hbs = require('hbs');


//helpers for handlers is Partials
hbs.registerPartials(__dirname + '/partials');

//we need to specify app.set() to use hbs

app.set('view engine', 'hbs');
// To use the middleware we need to define .use() 
app.use(express.static(__dirname + '/public'));


//setting middleware
app.use((req, res, next) => {
    var now = new Date().toDateString();
    var log =`${now}: ${req.method} ${req.url}`;
    console.log(log);
     
fs.appendFile('server.log', log + '\n', (err) => {
if(err){
    console.log('unable to append to server.log');
}
});

next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return 'hello';
});

//here in the browser , user can request for the home page the express with send back as a response in the res.send() function we can send as JSON object or html page ....
app.get('/home', (req, res) => {
    res.render('home.hbs', {
       // CurrentYear: new Date().getFullYear()
       Pagename: 'HOME Page'
    });
});


//response send it as object

//we use res.render for hbs pages accessing instead of res.send
app.get('/about', (req, res) => {
res.render('about.hbs',{
    name: 'Aditya',
    Description: 'TECH freak',
    likes: [
        'Morning person',
        'Day dreamer'
    ]
});
});

//listen is used to run the application in browser using the localhost: port with corresponding port number 

app.listen(3000, () => {
    console.log('Listening on port 3000');
});