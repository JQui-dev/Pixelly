import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <h1>Pixelly</h1>
      <Link to='/tic-tac-toe'>Tic Tac Toe</Link>
    </div>
  )
}

export default Home
