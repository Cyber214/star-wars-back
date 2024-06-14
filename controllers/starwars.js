const BASE_URL = 'https://swapi.dev/api'

async function getAllStarships(req, res) {
  try {
    const apiList = await fetch(`${BASE_URL}/starships`)
    const shipList = await apiList.json()
    res.json(shipList)
  } catch(error) {
    console.error('Error getting All Starships:', error)
    throw error
  }
}

async function getStarship(req, res) {
  try {
    const idx = req.params.starshipId
  const result = await fetch(`${BASE_URL}/starships/${idx}`)
  const starships = await result.json()
  res.json(starships)
  } catch(error) {
    console.error('Error getting a Starship:', error)
    throw error
  }
}

export {
  getAllStarships,
  getStarship,
}