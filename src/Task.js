import React, {useState, useEffect} from 'react'


const Task = ({myHeader}) => {
    const [count, setCount] = useState(0)
    let showPlus = () => {
        setCount(count + 1)
    }
    let showMinus = () => {
        setCount(count - 1)
    
    }
    useEffect(() => {
        setCount(100)
    }, [])
  return (
    <div style={{paddingLeft: "30px"}}>
        <h1>{myHeader}</h1>
        {/* SAME THING */}
        <button onClick={showPlus} style={{fontSize: '30px'}}>+</button>
        <span style={{fontSize: '30px'}}>{count}</span>
        <button onClick={showMinus} style={{fontSize: '30px'}}>-</button>
        {/* BREAK SPACE */}
        <br /><br />
        {/* SAME THING */}
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Task