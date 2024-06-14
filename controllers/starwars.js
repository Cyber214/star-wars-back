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

export {
  getAllStarships,
}