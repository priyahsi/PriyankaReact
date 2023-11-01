import { useState, useEffect } from "react";
function UseEffectFour(){
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(10);
    function ChangeCounter1(){
        setCounter1((prevValue) => prevValue + 1)
    }
    function ChangeCounter2(){
        setCounter2((prevValue) => prevValue + 1)
    }
    useEffect(() =>{
        console.log("hiiiiiii")
    }, [counter1, counter2])
    return (
        <div>
            <h1>Counter1 :{counter1}</h1>
            <button onClick={ChangeCounter1}>+for counter1</button>
            <h1>Counter2 :{counter2}</h1>
            <button onClick={ChangeCounter2}>+for counter2</button>
            </div>
    )
}
export default UseEffectFour;