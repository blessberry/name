import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../../webpack.dev';

const port = 3040;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(require("webpack-hot-middleware")(compiler));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../UI/js/index.js'))
});

app.listen(port, (err) => {
  err ? console.log(err) : open('http://localhost:' + port);
})
