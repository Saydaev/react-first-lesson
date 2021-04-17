import React, {useState} from 'react';
import Number from "./Number";
import Buttonsm from "./Buttonsm";

function Main(props) {
    const [counter, setCounter] = useState(0)

    return (
        <div className='main'>
            <Number counter={counter} />
            <Buttonsm counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default Main;