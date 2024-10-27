const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000

mongoose.connect("mongodb+srv://trydebojyotitantra:FOryYmbHSOEJJ3V9@debojyoti.zijrz.mongodb.net/Chakri")

const formSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  education: { type: String, require: true },
  dob: { type: Date, require: true },
  gender: { type: String, require: true },
  maritalStatus: { type: String, require: true },
  caste: { type: String, require: true },
  district: { type: String, require: true },
  experience: { type: Number, require: true }
})

const Form = mongoose.model('Form', formSchema)

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
  // res.send('Hello World!')
})

app.post('/submit', async (req, res) => {
  const formData = new Form({
    name: req.body.name,
    email: req.body.email,
    education: req.body.education,
    dob: req.body.dob,
    gender: req.body.gender,
    maritalStatus: req.body.maritalStatus,
    caste: req.body.caste,
    district: req.body.district,
    experience: req.body.experience
  })

  await formData.save()

  res.render('success', {
    name: req.body.name,
    email: req.body.email,
    education: req.body.education,
    dob: req.body.dob,
    gender: req.body.gender,
    maritalStatus: req.body.maritalStatus,
    caste: req.body.caste,
    district: req.body.district,
    experience: req.body.experience
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})