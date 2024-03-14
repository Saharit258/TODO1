import React, { useState } from "react";

function Guess1() {
    const [guess, setGuess] = useState({ id: null, nums: 0, number: "", message: "", count: 5 });

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleClick = () => {
        setGuess({ ...guess, nums: randomNumberInRange(1, 99), number: "", message: "", count: 5});
        alert("เริ่ม")
    };

    const check = () => {
        if (isNaN(guess.number)) {
            setGuess({ ...guess, message: "กรุณาใส่ตัวเลข" });
            return;
        }

        const num = Number(guess.number);

        let message = ''
        if (num < guess.nums) {
            message = "ต่ำ"
        } else if (num > guess.nums) {
            message = "สูง"
        } else {
            message = "เท่ากับ"
        }

        if (guess.count === 1) {
            message = "แพ้"
        } 
        setGuess({ ...guess, message, count: guess.count - 1 })
    };

    return (
        <>
            <div className="container">
                {/* <h2>ตัวเลขเป้าหมาย: {guess.nums}</h2> */}
                <button className='random-button' onClick={handleClick}>สุ่ม</button>
            </div>
            <div className="container2">
                <input className="random-input" type="text" value={guess.number} onChange={(e) => setGuess({ ...guess, number: e.target.value })} />
                <button className="random-check" onClick={check}>ตรวจสอบ</button>
            </div>
            <div className="container3">{guess.message}</div>
            <div className="container3">จำนวนครั้งที่เหลือ: {guess.count}</div>
        </>
    );
}

export default Guess1;
