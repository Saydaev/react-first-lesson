import React from 'react';

function Buttonsm(props) {

    if (props.counter < 0){
        props.setCounter(0);
    }

    function plus() {
        props.setCounter(props.counter + 3);
    }

    function minus() {
        if (props.counter > 0){
            props.setCounter(props.counter - 2)
        }
    }
    
    function reset() {
        props.setCounter(0);
    }

    
    return (
        <div className='buttonsm'>
            <button className='blue-btn' onClick={plus}>Увеличить</button>
            <button className='orange-btn' onClick={minus}>Уменьшить</button>
            <button className='gray-btn' onClick={reset}>Сбросить</button>
        </div>
    );
}

export default Buttonsm;