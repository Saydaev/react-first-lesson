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
            <div className='blue-btn' onClick={plus}>Увеличить</div>
            <div className='orange-btn' onClick={minus}>Уменьшить</div>
            <div className='gray-btn' onClick={reset}>Сбросить</div>
        </div>
    );
}

export default Buttonsm;