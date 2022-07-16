import React from 'react';
import {Text, View, Image } from 'react-native'
import Styletela3 from '../style';
import Iconefesta from 'react-native-vector-icons/MaterialCommunityIcons';
import Ponto from 'react-native-vector-icons/FontAwesome';
import Cook from 'react-native-vector-icons/MaterialIcons';
import IconSport from 'react-native-vector-icons/MaterialIcons';
import styles from '../style';


function Container ({
    img,
    data,
    humor,
    hora,
    icone1,
    acao1,
    icone2,
    acao2,
    icone3,
    acao3,
    comentario,
    color,
    
    
} ) { 
    return (

            <View style={styles.container}>

                <View style={styles.caixa1}>

                    <Image style={styles.image} source={img} />
                    <Text style={styles.textoprincipal}>{data}</Text> 
                    <Text  style={

            (styles.textosentimento,
            {
              color: color,
              height: 37,
              width: 90,
              left: 75,
              fontWeight: '700',
              fontSize: 24,
              bottom: 35,
              textAlign: 'center',
            })
            }>
        
        {humor}
            </Text>

                    <Text style={styles.textosentimento}>{humor}</Text>
                    <Text style={styles.textohorario}>{hora}</Text>
                    </View>

                <View style={styles.caixa2}>
                    <Iconefesta name= {icone1} color={"#000000"} size={20} />
                    <Text style={styles.ColorText1}>{acao1}</Text> 

                    <Ponto style={styles.Ponto} name="circle" color={"#000000"} size={5} />

                    <IconSport name={icone2} color={"#000000"} size={20} />
                    <Text style={styles.ColorText1} >{acao2}</Text>

                    <Ponto style={styles.Ponto} name="circle" color={"#000000"} size={5} />
                    
                    <Cook name={icone3} color={"#000000"} size={20} />
                    <Text style={styles.ColorText1}>{acao3}</Text>
                </View>


                <View style={styles.caixa3}>
                    <Text style={styles.textorodape}>{comentario}</Text>
                </View>


            </View>

      
 )   
}
export default Container;