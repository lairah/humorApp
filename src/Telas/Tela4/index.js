import React from 'react';
import {Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';


function Tela4(){ 
    return<>
    
    <View  style={styles.container}> 
            <Icon name='build' style={styles.icone} size={50}/>
        <Text style={styles.texto}> Em construção... </Text> 
     </View> 
    
    </>
}

export default Tela4;