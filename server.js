// Vercelが自動でExpressを準備できるようにする呪文
try { require('express'); } catch (e) { require('child_process').execSync('npm install express'); }

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 投稿されたメッセージを保存する配列（メモリ上に一時保存）
let posts = [
    { name: "管理人", message: "SNSへようこそ！自動更新機能がついたよ。" }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// メッセージ一覧を取得するAPI
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// 新しいメッセージを投稿するAPI
app.post('/api/posts', (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
        posts.unshift({ name, message }); // 新しい投稿を一番上にする
    }
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const app = express();
const PORT = process.env.PORT || 3000;

// 投稿されたメッセージを保存する配列（メモリ上に一時保存）
let posts = [
    { name: "管理人", message: "SNSへようこそ！自由に書き込んでね。" }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// メッセージ一覧を取得するAPI
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// 新しいメッセージを投稿するAPI
app.post('/api/posts', (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
        posts.unshift({ name, message }); // 新しい投稿を一番上にする
    }
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
