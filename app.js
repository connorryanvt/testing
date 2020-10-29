const express = require('express');
const app = express();
const exphbs = require('express-handlebars');


//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index');
});

//Set Static folder
app.use(express.static(`${__dirname}/public`))
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server Started on port' +'' + port);
});
