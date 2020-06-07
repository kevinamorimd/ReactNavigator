import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';

const TelaInicial = (props) => {
    return (
        <View>
            {TelaInicial}
        </View>
    )
};

TelaInicial.navigationOptions = dadosNav => {
    return{
      headerTitle: 'Cadastrar Usuario',
      headerRight: () => (
        <HeaderButtons 
          HeaderButtonComponent={BotaoCabecalho}
        >
          <Item 
            title="Adicionar"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => {dadosNav.navigation.navigate('Usuario')}}
          />
        </HeaderButtons>
      )
    }
  
  }

const estilos = StyleSheet.create({
});
export default TelaInicial;