import { useEffect, useState } from 'react'
import Table from '../components/ttt/Table'
import Menu from '../components/ttt/Menu'
import './style/TicTacToe.scss'

const INIT_TABLE = ['', '', '', '', '', '', '', '', '']

const combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function checkWin (table) {
  return combos.some(combo => {
    const [a, b, c] = combo
    return table[a] !== '' && table[a] === table[b] && table[a] === table[c]
  })
}
function checkDraw (table) {
  return table.every(cell => cell !== '') && !checkWin(table)
}

function TicTacToe () {
  const [table, setTable] = useState(INIT_TABLE)
  const [isFirst, setIsFirst] = useState(true)
  const [turn, setTurn] = useState(true)
  const [win, setWin] = useState(false)
  const [draw, setDraw] = useState(false)
  const [reset, setReset] = useState(false)

  useEffect(() => {
    if (!isFirst) {
      if (checkWin(table)) return setWin(true)
      if (checkDraw(table)) return setDraw(true)
      return setTurn(!turn)
    }
    return setIsFirst(false)
  }, [table, win])

  const tableProps = { table, win, draw, turn, setTable, reset }
  const menuProps = {
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
  }

  return (
    <div
      className={`TicTacToe ${(win || draw) && 'showMenu'} ${
        turn ? 'p1' : 'p2'
      }`}
    >
      <Menu {...menuProps} />
      <Table {...tableProps} />
    </div>
  )
}

export default TicTacToe
