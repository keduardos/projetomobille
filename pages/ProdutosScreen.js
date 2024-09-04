import React, {useEffect} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function ProdutosScreen({route}) {
    const {username, password} = route.params || {};

    useEffect(() => {
        console.log('Tela Produtos Carregada');

    }, [username, password]);


    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <View style={styles.text}>
                    <Text style={styles.text}>Seja Bem-vindo à Tela de Produtos!</Text>
                </View> 
                              
                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',

    },
    backgroundContainer: {
        width: '100%',
        height: '98%',
        padding: 20,
        paddingTop: 40,
        backgroundrColor: '#684156',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        
        alignItems: 'center',
        fontSize: 26,
        justifyContent: 'center',
    },


    text: {
        fontSize: 40,
        fontWeight:'bold',
        fontColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      },
  

      
});