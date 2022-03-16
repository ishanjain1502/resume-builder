const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const port = 1337;
const Form = require('./model/model.form')
mongoose.connect('mongodb://localhost:27017/resumeTest2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected Successfully");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'))

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');

})

app.post('/enteringData', async (req, res) => {
    const form = new Form(req.body.form);
    await form.save();
    res.redirect(`/forms/${form._id}`)
})

app.get('/forms/:id', async (req, res) => {
    const form = await Form.findById(req.params.id)
    res.render('resume', { form });
})

app.listen(port);
console.log('Server started at http://localhost:' + port);