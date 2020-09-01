import React, { Children } from 'react'
import '././pages/Logon/styles.css'


/* PROPRIEDADE CHILDREN RETORNA TODO CONTEUDO QUE ESTEJA NO FORMATO TEXTO DENTRO DA TAG/ Ex: props.childen */
/*export default*/ 
function Header({children}){ //Pode ser feito destruturação ao inves de receber o objeto inteiro. ex: { children } 

    return( 
        <header>  
            <h1 className="teste1">{ children /*prop.title*/}</h1>
        </header>
    ) 

}


export default Header