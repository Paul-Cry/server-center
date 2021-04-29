const express = require('express')
const http = require('http')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 1000
const bodyParser = require('body-parser')
const passport = require('passport')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(express.static('../webdev/'));
require('./middleware/passport')(passport)

const routes = require('./settings/routes')
routes(app)


//Маршрутизация по сайту

// Главная страница 
app.get('/main', function(req, res){
		res.writeHead(200, {'Content-Type': 'text/html; Charset=UTF8'});
		fs.createReadStream('../webdev/index.html').pipe(res)
})

app.get('/about', function(req, res){
		res.writeHead(200, {'Content-Type': 'text/html; Charset=UTF8'});
		fs.createReadStream('../webdev/about.html').pipe(res)
})

app.get('/contacts', function(req, res){
		res.writeHead(200, {'Content-Type': 'text/html; Charset=UTF8'});
		fs.createReadStream('../webdev/contact.html').pipe(res)
})

app.get('/ChoosePhone', function(req, res){
		res.writeHead(200, {'Content-Type': 'text/html; Charset=UTF8'});
		fs.createReadStream('../webdev/phone.html').pipe(res)
})

app.listen(port, () => {
    console.log(`Серввер запущен  ${port}`);
})


// export{port}

