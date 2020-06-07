import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Keyboard, Platform} from 'react-native';
import UsuarioInput from '../components/UsuarioInput';
import UsuarioItem from '../components/UsuarioItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';

const TelaCadastro = (props) => {
    const [usuarios, setUsuarios] = useState([]);
    let [contadorUsuarios, setContadorUsuarios] = useState(1);

    const removerLembrete = (keyASerRemovida) => {
        setUsuarios(usuarios =>{
          return usuarios.filter(nome => nome.key !== keyASerRemovida);
        })
    }

    const adicionarNome = (nome,telefone) => {
        setUsuarios (usuarios => {
          console.log (usuarios);
          setContadorUsuarios(contadorUsuarios + 1);
          return [{key: contadorUsuarios, vNome: nome, vTelefone: telefone}, ...usuarios];
     });
     Keyboard.dismiss();
    }

    

    return (
        <View style={estilos.tela}>
            <UsuarioInput onAdicionarUsuario={adicionarNome}/>
            <FlatList
            data={usuarios}
            renderItem={
                ({item}) => (
                <UsuarioItem
                    nome={item.vNome}
                    telefone={item.vTelefone}
                    /* chave={item.key} */
                    onSelect={
                        () => {props.navigation.navigate("DetalheDoUsuario", {nome: item.vNome, telefone:item.vTelefone})}
                    }
                    /* onDelete={removerLembrete}
                    onSelecionaUsuarioId={props.onSelecionaUsuarioId}
                    onSelecionaUsuarioNome={props.onSelecionaUsuarioNome}
                    onSelecionaUsuarioTelefone={props.onSelecionaUsuarioTelefone}
                    onSelecionaEditarTelaUsuario={props.onEditarTelaUsuario} */
                />
                )          
            }
            />
        </View>
    );
}

TelaCadastro.navigationOptions = dadosNav => {
    return {
        headerTitle: "Cadastro Usuario"
    }
}

const estilos = StyleSheet.create({
    tela: {
        padding: 25
    }
})

export default TelaCadastro;