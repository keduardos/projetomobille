import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Input from '../components/Input';

export default function LoginScreen({ navigation }) {                      
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {                                              
        if(username === 'Arthur' && password === 's123'){            
            navigation.navigate('Home', {
                username: username,
                password: password,
            });
        } else {
            alert('Usuário ou Senha incorretos, preencha novamente!');
        }
    };                                                                      

    return (                                                               
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                
                <Image source={require('../assets/imglogin.png')} style={styles.logo}/>
                
                <View style={styles.inputContainer}>
                    <Input placeholder={"Usuario"} value={username} onChangeText={setUsername}/>
                    <Input placeholder={"Senha"} value={password} onChangeText={setPassword} secureTextEntry/>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>

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
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20
    }, 
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        height: 45,
        width: '100%',
      }, 
      textButton: {
        fontSize: 18,
        color: 'white',
      },
});

