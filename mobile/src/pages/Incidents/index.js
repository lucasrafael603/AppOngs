import React,{ useState,useEffect} from 'react'
import { Feather } from '@expo/vector-icons'
import {View, FlatList ,Image, Text, TouchableOpacity, Linking} from 'react-native'
import logoImg from '../../assets/logo.png' /// Se definir de forma generica ele pega a logo de acordo com cada dispositivo
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import api from '../../../services/api'

///UseEffect é uma função que carrega os componentes apartir do momento que são exibidos em tela. 
//Quando as variaveis que estão dentro do array mudam ele atualiza
export default function Incidents(){
    const navigation = useNavigation()
    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState([])

    function navigateToDatail(incident){
        navigation.navigate('Detail', {incident} )

    }


    async function loadIncidents(){

        const response = await api.get('incidents')

        setIncidents(response.data)
        setTotal(response.headers['x-total-count'])

    }

    useEffect(() => {
        
     
       loadIncidents()

    }, [])


    return( 
        <View style={styles.container}>
        <View style={styles.header}> 
        <Image source={logoImg}/>
        <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
        </View>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia.</Text>
        

        <FlatList 
        data={[incidents]} 
        keyExtractor={incident => String(incident.id)}
        //onEndReached={} // Solicita uma função quando o usuario chega ao fim da lista
        onEndReachedThreshold={0.2} ///A partir de quantos porcentos da linha devo carregar os proximos itens
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        renderItem={({item: incident }) => //Apenas foi trocado o nome da variavel item para incident 
        (<View style={styles.incident}> 
        
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{incidents.name}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incidents.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency:'BRL'}).format(incident.values) }</Text>



<TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDatail(incident)}>

    <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
    <Feather name="arrow-right" size={16} color="#E02041" />
</TouchableOpacity>
</View>
)} />





          

        </View>
        
    )

}


