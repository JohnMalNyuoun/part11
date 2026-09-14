const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('dist'))
// this is a comment made by me to check the working of the new branch created
app.get('/health', (req, res) => {
  res.send('ok')
})
// lets check the new branch created by me and see if it works or not and the protection of the branch is working or not
app.listen(PORT, '0.0.0.0', () => {
  console.log(`server started on port ${PORT}`)
})