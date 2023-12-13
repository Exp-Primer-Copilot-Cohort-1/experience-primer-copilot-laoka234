// create web serve

// 2. create router
// 3. add router to web server
// 4. create handler for each router
// 5. start web server

// 1. create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. create router
const commentRouter = require('./routes/comment');

// 3. add router to web server
// 4. create handler for each router
app.use('/comment', commentRouter);

// 5. start web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});