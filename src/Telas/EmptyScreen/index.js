import React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';
import styles from './styles'


function Tela2() {
  return <>
    <View>
      <Image style={styles.image} source={require('../../../src/assets/neutro/neutral.png')}
      />
      <Text style={styles.Text} > Você ainda não tem nenhum registro diário. Para começar, toque no ícone de adicionar na tela.
      </Text>

    </View>

  </>
}

export default Tela2;

