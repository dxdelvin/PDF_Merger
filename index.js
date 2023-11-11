const express = require('express');
const path = require("path")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { mergeIt } = require('./merger.js')


const app = express();

app.use(express.static(path.join(__dirname + '/static')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./template/index.html"))
});

app.post('/merge', upload.any("pdfs", 2), async (req, res) => {
  let d = await mergeIt(path.join(__dirname, req.files[0].path), req.files[1].path)

  res.redirect(`https://testfile.dxdelvin.repl.co/static/public/${d}`)
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "./template/index2.html"))

})

app.listen(5000, () => {
  console.log('server started at ' + 5000);
});
