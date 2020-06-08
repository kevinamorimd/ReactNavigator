import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import * as usuariosActions from '../store/usuarios-actions'
import TiraFoto from './TiraFoto';
import CapturarLocalizacao from './CapturarLocalizacao';

const UsuarioInput = (props) => {

  const dispatch = useDispatch();

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [imagemURI, setImagemURI] = useState();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const capturarNome = (nome) => { setNome(nome); }

  const capturarTelefone = (telefone) => { setTelefone(telefone); }

  const fotoTirada = imagemURI => {
    setImagemURI(imagemURI);
  }

  const capturaLatLng = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
  }

  const adicionarUsuarioInput = () => {
    console.log("Nome: " + nome + " " + "\nTelefone: " + telefone + "\nLat " + latitude + "\nLongitude: " + longitude);
    dispatch(usuariosActions.addUsuario(nome, telefone, imagemURI, latitude, longitude));
  }

  return (
    <View style={styles.tela}>
      <TextInput
        placeholder="Nome..."
        style={styles.form}
        onChangeText={capturarNome}
        value={nome}
      />
      <TextInput
        placeholder="Telefone..."
        style={styles.form}
        onChangeText={capturarTelefone}
        value={telefone}
      />
      <TiraFoto onFotoTirada={fotoTirada} />
      <CapturarLocalizacao onCapturaLatLng={capturaLatLng} />
      <Button
        title="Salvar usuario"
        onPress={adicionarUsuarioInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flexDirection: 'column',
    marginBottom: 1,
    justifyContent: 'space-between',
  },
  form: {
    padding: 1,
    marginBottom: 0,
    borderBottomColor: 'black'
  }
})


export default UsuarioInput;