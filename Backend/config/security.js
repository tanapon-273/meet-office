const crypto = require('crypto')

const security = {
    password_hash(password){
        return crypto.createHash('sha1').update(password).digest('hex')
    },
    password_verify(password, password_hash){
        return security.password_hash(password) === password_hash
    },
    authenticated(req, res, next){
        req.session.userLogin = {
            "u_id": 11,
            "u_username": "admin273",
            "u_firstname": "Administrator",
            "u_lastname": "CEO",
            "u_role": "admin"
        }
        try{
            if(req.session.userLogin) {
                return next()
            }
            throw new Error('Unauthorized.')
        }catch (ex){
            res.error(ex,401)
        }
    }
}
module.exports = security