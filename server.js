// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// 模拟的餐厅数据
let restaurants = [
    { id: 1, name: "餐厅 A", menu: "菜单 A", location: "地址 A" },
    { id: 2, name: "餐厅 B", menu: "菜单 B", location: "地址 B" }
];

// 用户注册
app.post('/api/register', (req, res) => {
    const { username, password, email } = req.body;
    // 这里可以添加用户注册逻辑，例如存储用户信息到数据库
    console.log(`注册用户: ${username}, 密码: ${password}, 邮箱: ${email}`);
    res.send({ message: "用户注册成功" });
});

// 用户登录
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // 这里可以添加用户登录逻辑，例如验证用户信息
    console.log(`登录用户: ${username}, 密码: ${password}`);
    res.send({ message: "用户登录成功" });
});

// 获取餐厅列表
app.get('/api/restaurants', (req, res) => {
    res.json(restaurants);
});

// 添加餐厅
app.post('/api/restaurants', (req, res) => {
    const newRestaurant = req.body;
    newRestaurant.id = restaurants.length + 1;
    restaurants.push(newRestaurant);
    res.send({ message: "餐厅添加成功", restaurant: newRestaurant });
});

// 修改餐厅信息
app.put('/api/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedRestaurant = req.body;
    restaurants = restaurants.map(restaurant => {
        if (restaurant.id === id) {
            return {...restaurant,...updatedRestaurant };
        }
        return restaurant;
    });
    res.send({ message: "餐厅信息修改成功", restaurant: updatedRestaurant });
});

// 删除餐厅
app.delete('/api/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    restaurants = restaurants.filter(restaurant => restaurant.id!== id);
    res.send({ message: "餐厅删除成功" });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // 这里可以添加用户验证逻辑，例如查询数据库
    if (username === 'test' && password === 'test') {
        req.session.loggedIn = true;
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/api/check-login', (req, res) => {
    res.json({ loggedIn: req.session.loggedIn || false });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});

app.get('/api/check-register', (req, res) => {
    res.json({ registered: req.session.registered || false });
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const app = express();
// const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.post('/api/register', (req, res) => {
    const { username, password, email } = req.body;
    // 这里可以添加用户注册逻辑，例如存储用户信息到数据库
    console.log(`注册用户: ${username}, 密码: ${password}, 邮箱: ${email}`);
    // 假设注册成功
    req.session.registered = true;
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const app = express();
// const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // 这里可以添加用户登录逻辑，例如验证用户信息
    console.log(`登录用户: ${username}, 密码: ${password}`);
    let success = false;
    // 假设登录成功的简单验证，实际开发中需要更安全的验证，如查询数据库
    if (username === 'test' && password === 'test') {
        success = true;
    }
    res.json({ success });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const app = express();
// const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

// 解决跨域问题
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // 这里可以添加用户登录逻辑，例如验证用户信息
    console.log(`登录用户: ${username}, 密码: ${password}`);
    let success = false;
    // 假设登录成功的简单验证，实际开发中需要更安全的验证，如查询数据库
    if (username === 'test' && password === 'test') {
        success = true;
    }
    res.json({ success });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
// const app = express();
// const port = 3000;
const bcrypt = require('bcrypt');
const users = []; // 模拟用户存储，实际使用数据库

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // 查找用户
    const user = users.find(u => u.username === username);
    if (user) {
        // 比较密码
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});

