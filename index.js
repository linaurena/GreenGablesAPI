const express = require('express')
const cors = require('cors')
const app = express()
const logger = require('./loggerMiddleware')

app.use(cors())
app.use(express.json())
app.use(logger)

const characters = [
  {
    id: 1,
    name: 'Anne Shirley Cuthbert',
    gender: 'Female',
    status: 'Alive',
    ocupation: 'Student',
    firstAppearance: 'Your will shall decide your destiny'
  },
  {
    id: 2,
    name: 'Marilla Cuthbert',
    gender: 'Female',
    status: 'Alive',
    ocupation: 'Housewife',
    firstAppearance: 'Your will shall decide your destiny'
  },
  {
    id: 3,
    name: 'Matthew Cuthbert',
    gender: 'Male',
    status: 'Alive',
    ocupation: 'Farmer',
    firstAppearance: 'Your will shall decide your destiny'
  },
  {
    id: 4,
    name: 'Diana Barry',
    gender: 'Female',
    status: 'Alive',
    ocupation: 'Student',
    firstAppearance: 'Your will shall decide your destiny'
  },
  {
    id: 5,
    name: 'Ruby Gillis',
    gender: 'Female',
    status: 'Alive',
    ocupation: 'Student',
    firstAppearance: 'But what is so headstrong as youth?'
  },
  {
    id: 6,
    name: 'Guilbert Blythe',
    gender: 'Male',
    status: 'Alive',
    ocupation: 'Student, coal trimmer, farmer and doctor',
    firstAppearance: 'But what is so headstrong as youth?'
  },
  {
    id: 7,
    name: 'Jerry Baynard',
    gender: 'Male',
    status: 'Alive',
    ocupation: 'Farmhand',
    firstAppearance: 'Your will shall decide your destiny'
  },
  {
    id: 8,
    name: 'Cole Mackenzie',
    gender: 'Male',
    status: 'Alive',
    ocupation: 'Student',
    firstAppearance: 'Signs are small measurable things, but interpretations are illimitable'
  },
  {
    id: 9,
    name: 'Sebastian Lacroix',
    gender: 'Male',
    status: 'Alive',
    ocupation: 'Trimmer and farmer',
    firstAppearance: 'Youth is the season of hope'
  },
  {
    id: 10,
    name: "Ka'kwet",
    gender: 'Female',
    status: 'Alive',
    ocupation: 'Student',
    firstAppearance: 'A secret which I desired to divine'
  },
  {
    id: 11,
    name: 'Muriel Stacy',
    gender: 'Female',
    status: 'Alive',
    ocupation: 'School teacher',
    firstAppearance: 'What we have been makes us what we are'
  },
  {
    id: 12,
    name: 'Josie Pye',
    gender: 'Female',
    status: 'Alive',
    ocupation: 'Student',
    firstAppearance: 'Your will shall decide your destiny'
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hi!</h1>')
})

app.get('/api/characters', (request, response, next) => {
  response.json(characters)
  next()
})

app.get('/api/characters/:id', (request, response) => {
  const id = Number(request.params.id)
  const character = characters.find(character => character.id === id)

  if (character) {
    response.json(character)
  } else {
    response.status(404).end()
  }
})

app.use((request, response) => {
  response.status(404).json({
    error: 'Not found'
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
