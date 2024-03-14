import React, { useState } from 'react'
import './guess.css'

function guess() {
  const [nums, setNum] = useState(0);
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(5);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1, 99));
  };

  const check = () => {
    if (isNaN(number)) {
      setMessage('กรุณาใส่ตัวเลข');
      return;
    }

    const num = parseInt(number);
    if (num < nums) {
      setMessage('ต่ำกว่า');
    } else if (num > nums) {
      setMessage('มากกว่า');
    } else {
      setMessage('เท่ากับ');
    }

    if (count === 1) {
        setMessage(nums);
      } else if(num !== nums) {
        setCount(count - 1);
      } else {
        setMessage('ชนะ');
      }
  };

  console.log(nums)

  return ( 
    <>
      <div className="container">
        {/* <h2>ตัวเลขเป้าหมาย: {nums}</h2> */}
        <button className='random-button' onClick={handleClick}>สุ่ม</button>
      </div>
      <div className="container2">
        <input className='random-input' type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button className='random-check'  onClick={check}>ตรวจสอบ</button>
      </div>
      <div className="container3">{message}</div>
      <div className="container3">จำนวนครั้งที่เหลือ: {count}</div>
    </>
  )
}

export default guess
