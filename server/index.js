const express = require('express');
const { auth } = require('./middleware/auth');
const { User } = require('./models/User');
const mongoose = require('mongoose');
const config = require('./config/key');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = 5000;
const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose
    .connect(config.mongoURI)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.status(200).json({
            success: true,
        });
    });
});

app.post('/api/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: '제공된 이메일에 해당하는 유저가 없습니다.',
            });
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({
                    loginSucess: false,
                    message: '비밀번호가 틀렸습니다.',
                });
            }
            user.generateToken((err, user) => {
                if (err) {
                    return res.status(400).send(err);
                }
                res.status(200).json({
                    loginSuccess: true,
                    userId: user._id,
                    token: user.token,
                });
            });
        });
    });
});

app.get('/api/users/info', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        image: req.user.image,
    });
});

app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.status(200).send({
            success: true,
        });
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
