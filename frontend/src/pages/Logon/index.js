import React, {useState} from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom' // Busca o conceito de SPA para ser aplicado em links da pages
import {FiLogIn} from 'react-icons/fi' ///Ex 1:
//const feather = require('react-icons/fi') //Ex 2:  //é possivel importar diretamente o icone para o objeto ou atribuir em uma variavel a biblioteca e depois escolher o item da biblioteca. Conforme exemplo 1 e 2.
//const {FiLogIn} = feather Ex 2:
//import Header from '../../Header'
import api from '../../services/api'


export default function Logon(){
    const [id, setId] = useState('')
    const history = useHistory()

   async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('sessions', {id})
            console.log(response.data.name)
            localStorage.setItem('ongId', id) //Salva informações no storage do navegador
            localStorage.setItem('ongName', response.data.name)

            history.push('profile')
        }
        catch(err){
            alert('Falha no login, tente novamente')

        }
    }

    return (
        <div className="logon-container"> 
            <section className="form">
               <img src={logoImg} alt="Be The Hero"/>

                <fieldset>
                <form onSubmit={handleLogin}>
                <h1> Faça seu Login </h1>
                <input type="text" placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} ></input>
                <br></br>
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">    
                <FiLogIn size={16} color="#E02041" /> 
                Não tenho cadastro
                </Link>
                </form>
                </fieldset>
            </section> 
            <img className="" src={heroesImg} alt="Heroes" />
            
        </div>
    )

// OBS: Ao substituir anchor por link também devera ser trocado href por To
}
//<Header > Ola Mundo </Header>