import { useEffect, useState } from 'react'
import './style/Button.scss'
import { IoClose } from 'react-icons/io5'
import { MdOutlineCircle, MdClose } from 'react-icons/md'

function Button ({ init, win, draw, turn, setTable, pos, reset }) {
  const [value, setValue] = useState(init)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    setIsClicked(false)
    setValue(init)
  }, [reset])

  const icon = turn ? 'X' : 'O'
  const handleClick = () => {
    if (!isClicked && !win && !draw) {
      setTable(prev => {
        const array = [...prev]
        array[pos] = icon
        return array
      })
      setValue(icon)
      setIsClicked(true)
    }
  }

  return (
    <div
      className={`Button ${(isClicked || win || draw) && 'clicked'}`}
      onClick={handleClick}
    >
      {value === 'X' && <MdClose color='#b00'/>}
      {value === 'O' && <MdOutlineCircle color='#00b'/>}
    </div>
  )
}

export default Button
