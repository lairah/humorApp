import React from 'react';
import { 
    View,  
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    StyleSheet,

} from 'react-native';

import styles from './style';

export default function Login({navigation}) { 

return (
 <View style={styles.background}>

  
<View style={styles.container}> 
<Image style={styles.Image}
    source={require('../../../src/assets/login.png')} 
/>

<TextInput 
placeholderTextColor={'#969696'}
style={styles.input}
placeholder="e-mail"
autoCorrect={false}
/>
    
<TextInput 
placeholderTextColor={'#969696'}
style={styles.input}
placeholder="senha"
autoCorrect={false}
secureTextEntry={true}
/>

<TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate("Routestab")}>

<Text style={styles.submitText}>ENTRAR</Text>

</TouchableOpacity>
  </View>

  </View>
  );
}


