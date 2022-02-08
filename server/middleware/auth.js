const { User } = require('../models/User');

const auth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({ message: '로그인이 필요합니다.' });
    }

    const token = authorization.replace('Bearer', '');

    User.findByToken(token, (err, user) => {
        if (err) {
            throw err;
        }
        if (!user) {
            return res.json({ isAuth: false, error: true });
        }
        req.token = token;
        req.user = user;
        next();
    });
};

module.exports = { auth };
