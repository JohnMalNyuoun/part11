const express = require('express')
const app = express()


const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw new Error('Simulated deployment failure')
  res.send('ok')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`server started on port ${PORT}`)
})