import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Cores from '../cores/cores'
import TelaCadastro from "../telas/TelaCadastro";
import TelaUsuario from "../telas/TelaUsuario";
import TelaInicial from "../telas/TelaInicial";


const UsuariosNavegacao = createStackNavigator(
    {   
        Inicio: TelaInicial,
        Usuario: TelaCadastro,
        DetalheDoUsuario: TelaUsuario
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Cores.primary: ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
        }
    }

);

export default createAppContainer(UsuariosNavegacao);