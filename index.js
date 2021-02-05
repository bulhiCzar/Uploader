const express = require('express')
const config = require('config')
const mongoos = require('mongoose')
const path = require('path')
const fileUpload = require('express-fileupload')
const bodyParser = require("body-parser")

const app = express()
require('dotenv').config();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};



app.use(bodyParser.json())


// app.use('/uploads', express.static(__dirname, '/uploads'));

// app.use(express.static(__dirname + '/uploads'))
app.use(fileUpload())

app.use(allowCrossDomain)





app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/file', require('./routes/file.routes'))



if (process.env.NODE_ENV === 'production') {

    app.use('/', express.static(`${__dirname}/client/build`))

}else{
    app.use('/', express.static(`${__dirname}/client/build`))
    
}





const PORT = process.env.PORT || 5000

async function startBD() {
    try {
        await mongoos.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => { console.log(`App started on post ${PORT}`); })

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

startBD()
