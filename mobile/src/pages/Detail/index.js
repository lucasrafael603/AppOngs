import React from 'react'
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native'
import logoImg from '../../assets/logo.png' /// Se definir de forma generica ele pega a logo de acordo com cada dispositivo
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
//import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Detail(){

       const navigation = useNavigation()
       const route = useRoute()
       const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$120,00 '
       const incident = route.params.incident


       function navigateBack(){

        navigation.goBack()

       }


       function sendMail(){

        MailComposer.composeAsync({ subject: 'Heroi do caso: Cadelinha atropelada',
        recipients: ['diego@rocketseat.com.br'],
        body: message, 
     })


       }


       function sendWhatsapp(){

            Linking.openURL(`whatsapp://send?phone=5515997578278text=${message}`)

       }

    return( 
        
       
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image source={logoImg}/>
               



                <TouchableOpacity onPress={navigateBack}>

                    <Feather name="arrow-left" size= {28} color= "#E02041"/>
                </TouchableOpacity>
                </View>

            <View style={styles.incident}> 
                <Text style={[styles.incidentProperty, { marginTop: 0}]}>  ONG  </Text>
                <Text style={styles.incidentValue}> {incident.name} </Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}> {incident.title} </Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}> {incident.value} </Text>
            </View>

            <View style={styles.contactBox}>  
                
                <Text style={styles.heroTitle}> Salve o dia! </Text>
                <Text style={styles.heroTitle}> Seja o herói desse caso.</Text>
            
                <Text style={styles.heroDescription}> Entre em contato:</Text>
        

                    <View style={styles.actions}>

                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>

                                <Text style={styles.actionText}> WhatsApp</Text>    

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={sendMail}>

                                <Text style={styles.actionText}> E-mail</Text>    

                        </TouchableOpacity>


                    </View>

            </View>

        </View>
       
    )

}


