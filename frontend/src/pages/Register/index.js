import React, {useState} from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg';
/// Para criar uma tagHTML + classe de forma automatica ex: div.NomeDaClass
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default function Register(){
//Alt acrescenta descrição para img
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [whatsapp, setWhatsapp] = useState('')
        const [city, setCity] = useState('')
        const [uf, setUf] = useState('')

        const history = useHistory()
        //Quando não puder utilizar o link do react-router-dom utilizar o history. History abre uma instancia da rota atual
       async function handleRegister(e){
        e.preventDefault() // Previne que seja executado o comportamento padrão do submit do formulario.
        const data = {name,email,whatsapp,city,uf,}

        try{
          const response = await api.post('ongs', data) //axios ja envia no formato JSON

          alert(`Seu iD de acesso: ${response.data.id}`)
          history.push('/')}
          catch(err){

            alert('Erro no cadastro, tente novamente')
            
          }

         }

    return(

    <div className="register-container">

        <div className="content">
        <section>

        <img src={logoImg} alt="Be The Hero"></img>

        <h1> Cadastro </h1>
        <p> Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                <Link className="back-link" to="/">    
                <FiArrowLeft size={16} color="#E02041" /> 
                Não tenho cadastro
               </Link>
        </section>
        <form onSubmit={handleRegister}>

            
  
         <input placeholder="Nome Da ONG" value={name} onChange={e => setName(e.target.value)} /> 
         <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value) } ></input>
         <input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />

   
         <div className="input-group"> 
    
        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value) } />
        <input placeholder="UF" style={{width: 80 }}  value={uf} onChange={e => setUf(e.target.value)} />
    
    
        </div>

        <button className="button" type="submit" >Cadastrar</button>
        </form>


        </div>

    </div>


        

    )


}
//E = evento de mudança e no caso de e.target.value = valor atribuido ao input
// Na modificação de estados - temos o valor inicial do componente no value e no OnChange roda uma função que atribui o novo valor do input para função de atualização de estado


//Todo componente dentro do react tem a opção de style={{}} 
// Se utilizar a primeira chave quer dizer que estamos adicionado um codigo javascript no HTML
// Caso utilizar com a segunda chave diz que estou adicionando um objeto do javascript que pode até incluir CSS


//<input placeholder="Nome da ONG"> </input>