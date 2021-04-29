import React, {useState} from 'react';

function App(props) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const loginAdmin = 'admin';
    const passwordAdmin = 'admin';
    const [perform, setPerform] = useState('');
    const [type, setType] = useState('password');

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClick = () => {
        if (login === loginAdmin && password === passwordAdmin){
        return setPerform('Вы успешно вошли!')
    } else {
        return setPerform('Неправильный логин или пароль.')
        }
    }

    const showClick = () => {
        if (type === 'password'){
            return setType('string')
        } else if (type === 'string'){
            return setType('password')
        }
    }

    return (
        <div className='app'>
            <div><input maxLength={8} placeholder='Логин' value={login} onChange={handleChangeLogin}/></div>
            <div className='flex'>
                <input type={type} maxLength={8} placeholder='Пароль' value={password} onChange={handleChangePassword}/>
                <button className='show-btn' onClick={showClick}>Клик</button>
            </div>
            <div className='text'>{perform}</div>
            <div className='btn'><button className='button' onClick={handleClick}>Войти</button></div>
        </div>
    );
};

export default App;