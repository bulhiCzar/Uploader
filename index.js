const express = require('express')
const config = require('config')
const mongoos = require('mongoose')
const fileUpload = require('express-fileupload')
const bodyParser = require("body-parser")

const app = express()



app.use(bodyParser.json())


// app.use('/uploads/files', express.static('uploads/files'));

app.use(express.static(__dirname + '/uploads'))
app.use(fileUpload())





app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/file', require('./routes/file.routes'))
// app.use('/api/test', require('./routes/test.routes'))





const PORT = config.get('port') || 5000

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
