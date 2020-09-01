import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profiles from './pages/Profile' 
import NewIncident from './pages/NewIncident'

/*BrownserRouter - fica por volta das rotas para o roteamento funcionar*/
/*Route - cada uma das rotas*/
/*Switch garante que seja executada uma rota seja chamada por momento */
export default function Routes(){
/* O react-router-dom não verifica se as rotas são iguais, mas sim o inicio dela que fica no path. Para evitar estes problemas incluir exact */
    return(

        <BrowserRouter>
            <Switch>
                
                <Route path="/incidents/new" component={NewIncident}/>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profiles}  />
            </Switch>
        </BrowserRouter>


    )


}