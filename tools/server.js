/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import browserifyMiddleware from 'browserify-middleware';
import sassMiddleware from 'node-sass-middleware';
import chalk from 'chalk';
import open from 'open';

const app = express();
browserifyMiddleware.settings({
  transform: ['babelify']
});

const sassConfig = {
  src: path.join(__dirname, '../src/scss'),
  dest: path.join(__dirname, '../dist'),
  debug: true
};

app.use(sassMiddleware(sassConfig));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/bundle.js', browserifyMiddleware(path.join(__dirname, '../src/index.js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});


app.listen(3000, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  }

  console.log(chalk.green('Listening on port 3000'));
  console.log(chalk.green('Mode: ', process.env.NODE_ENV));
  open('http://localhost:3000');
});
