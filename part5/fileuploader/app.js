// 파일 업로드 서버 만들기
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const UPLOAD_DIR = "uploads/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

const app = express();

app.use((err, req, res, next) => {
    res.status(500).send("파일 업로드에 실패했습니다.");
});

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/upload", cors(), upload.single("file"), (req, res, next) => {
    if (!req.file) return next(400);
    res.status(200).send("파일 업로드 성공");
});

app.get("/file_list", cors(), (req, res, next) => {
    fs.readdir(path.join(__dirname, UPLOAD_DIR), (err, files) => {
        if (err) return next(500);
        res.status(200).json(files);
    });
});

app.listen(3000);
