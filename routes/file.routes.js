const {Router} = require('express')
const config = require('config')
const auth = require('../middleware/auth.middleware')
const shortid = require('shortid')
const jwt = require('jsonwebtoken')
const File = require('../models/File')
const User = require('../models/User')

const AWS = require('aws-sdk')
const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SNAPSHOT_BUCKET, AWS_SNAPSHOT_URL} = process.env
const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
})

const router = Router()

// var upload = multer({ dest: 'uploads/' })

router.post(
    '/test',
    // upload.array('idx1', 12),
    async (req, res) => {
        // console.log(req)

        try {
            if (req.body.token == null) {
                return res.json({message: 'Вы не авторизованы'})
            }

            let filesObject = req.files
            const decoded = jwt.verify(req.body.token, config.get('jwtToken'))
            console.log(decoded)

            filesArray = Object.values(filesObject)

            // console.log(files.length)
            // console.log(req.files)
            let i
            for (i = 0; i < filesArray.length; ++i) {
                // const File = filesArray[i];
                const hash = decoded.userId + '-' + shortid.generate() + '--' + filesArray[i].name
                filesArray[i].name = hash

                filesArray[i].mv(`uploads/${filesArray[i].name}`, function (err) {
                    if (err) {
                        return res.status(500).json({
                            message: 'Почему-то не загрузилось. Попробуйте еще раз',
                            type: 'error'
                        })
                    }
                    // res.json({ message: 'File uploaded!' })
                })

                const file = new File({
                    hash
                })

                // console.log(file)
            }

            res.json({message: 'Загрузка прошла успешно', type: 'success'})
            // console.log(res)
        } catch (error) {
            res.status(500).json({message: `Что-то пошло не так... ${error}`, type: 'error'})
        }


    });


//     api/file/upload
router.post(
    '/upload/:name',
    auth,
    async (req, res) => {
        try {
            const masterReq = await User.findOne({_id: req.user.userId})
            let {name} = req.params

            name = !name && Date.now()

            let filesObject = req.files
            let filesArray = Object.values(filesObject)


            let i
            let fileAge = 0
            for (i = 0; i < filesArray.length; ++i) {
                const hash = masterReq.login + '-' + shortid.generate() + '-' + filesArray[i].name

                const exe = filesArray[i].name.split('.')[1]
                const Key = name+'.'+exe


                const buf = filesArray[i].data
                const params = {
                    // Key: filesArray[i].name,
                    Key,
                    Body: buf,
                    ContentEncoding: filesArray[i].encoding || 'base64',
                    ContentType: filesArray[i].mimetype || 'image/jpeg',
                    Bucket: AWS_SNAPSHOT_BUCKET
                }

                s3.putObject(params, function (err, data) {
                    if (err) {
                        console.log('ERROR POSTING')
                        console.error(err)
                    }
                })


                const file = new File({
                    master: masterReq.login,
                    link: AWS_SNAPSHOT_URL + Key,
                    name: hash,
                    md5: filesArray[i].md5,
                    owner: req.user.userId
                })

                await User.updateOne({_id: req.user.userId}, {$push: {files: file._id}})

                await file.save()
            }

            res.status(201).json({message: 'Загрузка прошла успешно', type: 'success', failLoad: fileAge})
        } catch
            (error) {
            console.log(error)
            res.status(500).json({message: `Что-то пошло не так...`, type: 'error'})
        }
    })

router.get('/', auth, async (req, res) => {
    try {

        const files = await File.find({owner: req.user.userId})
        res.json(files)
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так... \nПопробуйте позже', type: 'error'})
    }
})

router.get('/:id', auth, async (req, res) => {
    // console.log(1)
    try {
        // console.log(req.params)
        const file = await File.find({name: req.params.id})
        console.log(file)
        res.json(file)
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так... \nПопробуйте позже', type: 'error'})
    }
})


module.exports = router