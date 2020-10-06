const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
const router = Router()


router.get('/profil', auth,  async (req, res) => {
    // console.log(req.body)

    const profil = await User.findOne({ _id: req.user.userId })
    res.json(profil)
})



//  /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Email is bad').isEmail(),
        check('login', 'Login is bad').isLength({ min: 4 }),
        check('password', 'Password is bad').isLength({ min: 6 })
    ],
    async (req, res) => {
        // console.log(req.body)
        try {
            const errorsValidation = validationResult(req)
            if (!errorsValidation.isEmpty()) {
                return res.status(400).json({
                    message: 'Некоректные данные',
                    type: 'error',
                    errors: errorsValidation.array()
                })
            }


            const { email, login, password } = req.body

            const condidateEmail = await User.findOne({ email: email })
            const condidateLogin = await User.findOne({ login: login })

            if (condidateEmail || condidateLogin) {
                return res.status(400).json({ message: 'Такой пользователь уже существует', type: 'error' })
            }

            const hashedPassword = await bcrypt.hash(password, 8)

            const user = new User({
                email: email,
                login: login,
                password: hashedPassword
            })

            await user.save()

            res.status(201).json({ message: 'Пользователь создан', type: 'success', })
        } catch (error) {
            res.status(500).json({ message: 'Что-то пошло не так... \nПопробуйте позже', type: 'error' })
            console.log(error)
        }
    }
)

//  /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Email is bad').exists(),
        check('password', 'Password is bad').exists()
    ],
    async (req, res) => {
        // console.log(req.body)
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty) {
                return res.status(400).json({
                    message: 'Некоректные дванные',
                    errors: errors.array()
                })
            }

            const { email, password } = req.body

            const user = await User.findOne({ email })
            // console.log(user)
            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }

            const isMatchPassword = await bcrypt.compare(password, user.password)
            if (!isMatchPassword) {
                return res.status(400).json({ message: 'Неверный пароль' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtToken'),
                { expiresIn: '1000 days' }
            )

            res.status(200).json({ token, userId: user.id })

        } catch (error) {
            res.status(500).json({ message: 'Что-то пошло не так... \nПопробуйте позже' })
            console.log(error)
        }
    }
)


module.exports = router