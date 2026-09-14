const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('dist'))
// this is a comment made by me to check the working of the new branch created
app.get('/health', (req, res) => {
  res.send('ok')
})
// Adding protection to your main branch
app.listen(PORT, '0.0.0.0', () => {
  console.log(`server started on port ${PORT}`)
})