import Button from './Button'

function Table ({ table, win, draw, turn, setTable, reset }) {
  return (
    <div className='table'>
      {table.map((init, key) => (
        <Button
          init={init}
          win={win}
          draw={draw}
          turn={turn}
          setTable={setTable}
          pos={key}
          reset={reset}
          key={key}
        />
      ))}
    </div>
  )
}

export default Table
