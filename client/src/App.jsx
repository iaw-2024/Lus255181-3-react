import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { getData } from './http/api'
import { Gallery } from './components/Gallery'

function App() {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    getData()
      .then((response) => response.json())
      .then(value => setRecipes(value))
      .catch(error => setError(error))
  }, [])

  return (
    <>
    <h1 className='titulo'>Recetas</h1>
      {error ?
        <span>{error}</span> :
        <Gallery recipes={recipes} />
      }
    </>
  )
}

export default App
