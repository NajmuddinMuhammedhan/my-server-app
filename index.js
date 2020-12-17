const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())

app.get('/', (req, res) => {
	res.send('Home Page')
})

app.get('/users', (req, res) => {

	const data = [
		{ id: 1, username: 'muhammad', },
		{ id: 2, username: 'harun', },
		{ id: 3, username: 'suleiman', },
	]

	res.send(data)
})

app.get('/books', (req, res) => {

	const data = [
		{ id: 1, name: 'JavaScript', },
		{ id: 2, username: 'Swift', },
	]

	res.send(data)
})

app.listen(PORT, () => {
	console.log('Server ready at: ' + PORT)
})
