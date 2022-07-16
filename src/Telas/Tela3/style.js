import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        width: 380,
        height: 158,
        marginTop: 20,
        marginLeft: 18,
        borderRadius: 20,
        
        
    },
    caixa1: {
        width: '90%',
        height: '50%',
    },
    textoprincipal: { 
        textAlign: "center",
        bottom: 35,
        lineHeight: 24,
        fontWeight: '400',
        color: '#ACACAC',
        
    },

    image: {
        width: 57,
        height: 57,
        top: 15,
        left: 15,
        
    },

    textohorario: { 
        bottom: 85,
        textAlign: "center",
        fontSize: 14,
        lineHeight: 21,
        color: '#ACACAC',
        left: 20,

    },
    caixa2: {
        width: '100%',
        height: '20%',
        flexDirection: "row",
        alignItems:'center',
        paddingLeft: 20,
        paddingTop: 10,
        
        
    },
    caixa3: {
        width: '100%',
        height: '30%',
        borderRadius: 20,
        left: 10,
        right: 30,
        
    },
    textorodape: {
        width: 250,
        height: 50,
        color: '#ACACAC',
        marginTop: 10, 
        fontSize: 13,
        paddingLeft: 10,
    },

    textoIcone: {
        marginLeft: 20,
        width: '900',   
    },
    ColorText1: {
        color: '#000000',
        marginLeft: 10,
    },
    Ponto: {
        marginTop: 4,
        marginLeft: 20,
    }
});

export default Styles;