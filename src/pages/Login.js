import React, {useState} from 'react';
import api from '../services/api';

import './Login.css';
import logo from '../assets/logo.svg';

function Login({history}){
    const [username, setUsername] = useState('');

    async function handleSubmit (e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username
        });
          
        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" height={50}/>
                <input
                    placeholder="Digite o seu usuário do Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
};

export default Login;