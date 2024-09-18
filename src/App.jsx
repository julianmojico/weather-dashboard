import { useState } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import Week from './components/Week/Week';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <NavBar/>
      <Week/>
    </Container>
  )
}

export default App