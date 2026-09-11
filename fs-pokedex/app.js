const express = require('express')
const app = express()

// get the port from env variable or fallback to 5001
const PORT = process.env.PORT || 5001

// SERVE FROM 'dist' INSTEAD OF 'build'
app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`server started on port ${PORT}`)
})