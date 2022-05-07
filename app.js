const db = require('./db');

const express = require('express');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;
// heroku config:set PGSSLMODE=no-verify --app <HEROKU APP NAME>

app.use(express.json());
app.use(cors())
app.options('*', cors())


app.get("/", (req, res) => {
  res.send('Welcome to Z-Pre Posting API by Andrew Gorospe.');
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});