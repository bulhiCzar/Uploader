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

// console.log(process.env)

// app.use('/api/test', require('./routes/test.routes'))
// console.log(path.join(__dirname, 'client', 'build'))


// app.use('/', express.static(path.join(__dirname, 'client', 'build')))

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })



if (process.env.NODE_ENV === 'production') {

    // express.static(`${__dirname}/build`)

    app.use('/', express.static(`${__dirname}/client/build`))
    
    // app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}else{
    app.use('/', express.static(`${__dirname}/client/build`))
    
    // app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}





const PORT = process.env.PORT || 5000

async function startBD() {
    try {
        const DB = await mongoos.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        // console.log(!DB)
        // if (!DB) {
        //     console.log(DB)
        // }

        // app.use(bodyParser.urlencoded({ extended: false }));
        app.listen(PORT, () => { console.log(`App started on post ${PORT}`); })

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

startBD()
