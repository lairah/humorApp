import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles  from './styles';
import Relogio from 'react-native-vector-icons/MaterialIcons'
import Calendario from 'react-native-vector-icons/MaterialIcons'
import Dancing from 'react-native-vector-icons/MaterialCommunityIcons'
import Esportes from 'react-native-vector-icons/MaterialIcons'
import Comida from 'react-native-vector-icons/MaterialIcons'
import SetaReturn from 'react-native-vector-icons/AntDesign'


function Tela5({route:{params},navigation}) {
const itemSave = params.itemSave
const {
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

} = itemSave

  return (
    <View style={styles.tela}>
        <TouchableOpacity style={styles.setaReturn} onPress={() => navigation.goBack()}> 
        <SetaReturn name="leftcircle" size={35} color={"#304FFE"}/>
        </TouchableOpacity>
      <View style = {styles.box2}>
      <Relogio style={styles.relogio1} name="timer" color={'gray'} size={20} />
      <Calendario style={styles.calendario1} name="calendar-today" color={'gray'} size={20} />
      <Text style = {styles.textoHora}>{hora}</Text>
        <Text style = {styles.textoData}>{data}</Text>
        
       
        <Image style={styles.imagem} source={img} />
        <Text style = {[styles.Textobem, {color: color}]}>{humor}</Text>
      </View>


    <View style = {styles.container}>
    <Dancing style={styles.Dancing} name={icone1} color={'white'} size={40} />
    <Text style = {styles.TextoDancing}>{acao1}</Text>

    <Esportes style={styles.Esportes} name={icone2} color={'white'} size={40} />
    <Text style = {styles.TextoEsportes}>{acao2}</Text>
    
    <Comida style = {styles.Comida} name ={icone3} color={'white'} size= {40} />
    <Text style = {styles.TextoComida}>{acao3}</Text>

    </View>

    <View style = {styles.box}>
      <Text style={styles.Texto}>{comentario}
      
       </Text>

    </View>
      
    </View>
  );
}
export default Tela5;
