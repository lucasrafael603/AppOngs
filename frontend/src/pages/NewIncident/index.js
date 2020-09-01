import React, {useState} from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default function NewIncident(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [value,setValue] = useState('')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()
    
   async function handleNewIncident(e){
        e.preventDefault()

        const data = { title, description, value,}

        try {

            await api.post('incidents' , data , { headers: {Authorization: ongId} // Sequência de dados - Tentar fazer com que api envia dados para o back-end 
            })                                                             //(1 parametro = Endereço URL para completar a APi)
                                                                           // (2 Parametro = dados que serão enviados) 
            history.push('/profile')                                       // (3 parametros = Entra nos objetos headers e depois em autorização e verica o id se é igual o que esta em localstorage)         
        }
        catch(err){

            alert('Erro ao cadastrar caso, tente novamente')
        }

    }

    return( <div className="new-incident-container">

    <div className="content">
    <section>

    <img src={logoImg} alt="Be The Hero"></img>

    <h1> Cadastrar seu novo caso </h1>
    <p> Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

            <Link className="back-link" to="/profile">    
            <FiArrowLeft size={16} color="#E02041" /> 
            Voltar para HOME
           </Link>
    </section>
    <form onSubmit={handleNewIncident}>

        

     <input placeholder="Titulo do Caso" value={title} onChange={e => setTitle(e.target.value)}/>
     <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
     <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>





    <button className="button" type="submit" >Cadastrar</button>
    </form>


    </div>

</div>
)


}