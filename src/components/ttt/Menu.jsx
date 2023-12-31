import { Link } from 'react-router-dom'
import './style/Menu.scss'
import { GrPowerReset } from 'react-icons/gr'
import { GoHomeFill } from 'react-icons/go'

function Menu ({
  INIT_TABLE,
  win,
  draw,
  setDraw,
  turn,
  setTable,
  setWin,
  setTurn,
  setIsFirst,
  setReset,
  reset
}) {
  const handlePlayAgain = () => {
    setTable(INIT_TABLE)
    setWin(false)
    setDraw(false)
    setTurn(true)
    setIsFirst(true)
    setReset(!reset)
  }

  if (win || draw) {
    return (
      <div className='Menu'>
        {win && <h2>{`PLAYER ${turn ? '1' : '2'} WON!`}</h2>}
        {draw && <h2>{`DRAW!`}</h2>}
        <div className='btns'>
          <Link to='/'>
            <GoHomeFill />
            <h3>HOME</h3>
          </Link>
          <button onClick={handlePlayAgain}>
            <GrPowerReset />
            <h3>RESET</h3>
          </button>
        </div>
      </div>
    )
  }
}

export default Menu
