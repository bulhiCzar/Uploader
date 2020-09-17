const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {

    if (req.method === 'OPTIONS') {
        return next()
    }
    // console.log(req.headers)

    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            res.status(401).json({message: 'Вы не авторизированы'})
            return
        }

        const decoded = jwt.verify(token, config.get('jwtToken'))

        req.user = decoded

        next()
    } catch (e) {
        // console.log(e)
        res.status(401).json({message: 'При проверке авторизации произошла ошибка'})
    }
}