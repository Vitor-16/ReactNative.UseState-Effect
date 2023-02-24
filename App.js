import React, { useState, useEffect, useReducer } from 'react';
import { Text, View, TextInput, TouchableOpacity,
        Button, ActivityIndicator, ScrollView, 
        SafeAreaView, Alert, StyleSheet } from 'react-native';

const app = ()=> {
  const [valor, setValor] = useState('Valor Padrão');
  const [clicado, setClicado] = useState(false);
  useEffect(()=>{
    Alert.alert('Independente se o botão foi clicado ou não')
    if(clicado==true){
      setValor('O botão foi clicado');
    } 
    else{
      setValor('O estado do botão está falso');
    }
  }, [clicado]);
  return (
    <View>
      <Text>Fech API - ViaCEP</Text>
      <Text>{valor}</Text>
      <Button onPress={()=>{(clicado==false) ? setClicado(true) : setClicado(false)}} 
        title={'Clique aqui para alterar o valor'}
      />
    </View>
  )
};

export default app;

