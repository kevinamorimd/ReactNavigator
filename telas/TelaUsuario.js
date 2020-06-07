import React, { useRef , useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Keyboard} from 'react-native';
import Cartao from '../components/Cartao';

const TelaUsuario = (props) => {
    
    const nomeAtual = useRef('');
    const telefoneAtual = useRef('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    
    nomeAtual.current = props.nome;
    telefoneAtual.current = props.telefone;

    const capturarNome = (nome) => {
        setNome(nome);
    }

    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    }

    const editar = () => {    
        props.onEditarUsuario(props.id, nome, telefone);
        Keyboard.dismiss();
    }

    const editarTelaInicio = () => {
        props.onEditarTelaInicio();
    }
    

    return (
        <View styles={estilos.telaView}>
            <Text style={estilos.titulo}>Perfil do usuario</Text>
                <Cartao estilos={estilos.telaView}>
                    <Text style={estilos.txtForm}>Nome: {props.navigation.state.params.nome}</Text>
                    <Text style={estilos.txtForm}>Telefone: {props.navigation.state.params.telefone}</Text>
                </Cartao>
        </View>
      );
}


const estilos = StyleSheet.create({
    txtForm:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        marginVertical: 10
    },
    telaView:{
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 2
    },
    titulo:{
        fontSize: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    form: { 
        padding: 2,
        marginBottom: 2,
        borderBottomColor: 'black',
        alignItems: 'center',
        margin: 10,
    }
});

export default TelaUsuario;