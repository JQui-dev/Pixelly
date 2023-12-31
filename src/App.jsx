import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import TicTacToe from './pages/TicTacToe'
import './App.css'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route path='/tic-tac-toe' element={<TicTacToe />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
