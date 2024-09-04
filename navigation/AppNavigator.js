import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import ProdutosScreen from '../pages/ProdutosScreen';
import PerfilScreen from '../pages/PerfilScreen';



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Produtos" component={ProdutosScreen} />
                <Stack.Screen name="Perfil" component={PerfilScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
