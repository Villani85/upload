const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'File caricato con successo!' });
});

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
