const express = require('express');
const logger = require('morgan');
const bParser = require('body-parser');
const app = express();
const routes = require('./routes/index');
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views') );

app.use(logger('dev'));
app.use(bParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use('/',routes);

app.listen(app.get('port'),()=>{
    console.log('Running on port', app.get('port'))
});
