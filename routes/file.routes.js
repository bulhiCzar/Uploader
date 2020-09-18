const { Router } = require('express')
const config = require('config')
const auth = require('../middleware/auth.middleware')
const shortid = require('shortid')
const jwt = require('jsonwebtoken')
const File = require('../models/File')
const User = require('../models/User')
const path = require('path')

const router = Router()

// var upload = multer({ dest: 'uploads/' })

router.post(
    '/test',
    // upload.array('idx1', 12),
    async (req, res) => {
        // console.log(req)

        try {
            if (req.body.token == null) {
                return res.json({ message: 'Вы не авторизованы' })
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
                        return res.status(500).json({ message: 'Почему-то не загрузилось. Попробуйте еще раз', type: 'error' })
                    }
                    // res.json({ message: 'File uploaded!' })
                })

                const file = new File({
                    hash
                })

                // console.log(file)
            }

            res.json({ message: 'Загрузка прошла успешно', type: 'success' })
            // console.log(res)
        } catch (error) {
            res.status(500).json({ message: `Что-то пошло не так... ${error}`, type: 'error' })
        }



    });


//     api/file/upload
router.post(
    '/upload',
    auth,
    async (req, res) => {
        try {
            const masterReq = await User.findOne({ _id: req.user.userId })

            let masterArrayF = Object.values(masterReq.files)

            // console.log(masterReq)

            let filesObject = req.files
            let filesArray = Object.values(filesObject)

            let i
            let fileAge = 0
            let masterLinks = masterArrayF
            // console.log(masterArrayF)
            for (i = 0; i < filesArray.length; ++i) {
                const hash = masterReq.login + '-' + shortid.generate() + '-' + filesArray[i].name
                const existing = await File.findOne({ md5: filesArray[i].md5 })

                if (existing) {
                    // res.json({ message: 'Этот фаил уже был' })\
                    // console.log(existing)
                    fileAge = fileAge + 1
                } else {
                    filesArray[i].name = hash

                    // console.log(typeof masterLinks)
                    masterLinks.unshift(hash)
                    // console.log(`../client/build/files/${filesArray[i].name}`)

                    filesArray[i].mv(`uploads/${filesArray[i].name}`, function (err) {
                        if (err) { 
                            // console.log(err)
                            return res.status(500).json({message: 'Почему-то не загрузилось. Попробуйте еще раз', type: 'error' }) }


                    })
                    // MasterLinks = MasterLinks.unshift(hash)
                    // console.log(MasterLinks)


                    const file = new File({
                        master: masterReq.login,
                        link: `${config.get('baseUrl')}/static/files/${hash}`,
                        name: hash,
                        // md5: Date.now(),
                        md5: filesArray[i].md5,
                        owner: req.user.userId
                    })
                    // console.log(file)

                    await User.updateOne({ _id: req.user.userId }, { $push: { files: file._id } })

                    await file.save()
                }
            }

            if (fileAge == 0) {
            res.status(201).json({ message: 'Загрузка прошла успешно', type: 'success', failLoad: fileAge })
                
            }else{
            res.status(402).json({ message: 'Такой фаил уже был загружен ранее', type: 'warning', failLoad: fileAge })

            }
            // console.log(res)
        } catch (error) {
            // console.log(error)
            res.status(500).json({ message: `Что-то пошло не так...`, type: 'error' })
        }
    })

router.get('/', auth, async (req, res) => {
    try {

        const files = await File.find({ owner: req.user.userId })
        res.json(files)
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так... \nПопробуйте позже', type: 'error' })
    }
})

router.get('/:id', auth, async (req, res) => {
    // console.log(1)
    try {
        // console.log(req.params)
        const file = await File.find({ name: req.params.id })
        console.log(file)
        res.json(file)
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так... \nПопробуйте позже', type: 'error' })
    }
})


module.exports = router