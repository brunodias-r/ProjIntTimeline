import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, Image, View, TouchableOpacity } from "react-native";
// import data from '../models/SituacaoAprendizagem.js'
import Encontro from '../components/encontro/index.js'
import ObjetoAprendizagem from '../components/objetoAprendizagem/index.js'

export default function TimelineSessoesScreen({navigation}) {

  const [imagem, setImagem] = useState(require('../assets/images/relogio.png'));
  const [dataEnc, setDataEnc] = useState([]);
  const [dataObj, setDataObj] = useState([]);

  const fetchDataEnc = async () => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/Encontro");
    const dataEnc = await resp.json();
    setDataEnc(dataEnc);
    console.log(dataEnc)
  };

  const fetchDataObj = async () => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/ObjetoAprendizagem");
    const dataObj = await resp.json();
    setDataObj(dataObj);
    console.log(dataObj)
  };

  useEffect(() => {
    fetchDataEnc();
    fetchDataObj();
  }, []);

  // function openScreen() {
  //   // navigation.navigate('Informações', { dia: data.dia, titulo: data.titulo, situacao: data.situacao, descricao: data.descricao })
  //   navigation.navigate('Informações', data, dataObj)
  // }

  const openScreen = () => {
    // navigation.navigate('Informações', {dataObj},{dataSit})
    navigation.navigate('Informações', {dataObj})
  }

  function trocarImagem() {
    setImagem(require('../assets/images/verifica.png'))
  }

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.timeline}>
        <View style={styles.parte1}>
          <View style={styles.circulo}>
            <Image source={imagem} style={{ width: 19, height: 19 }} />
          </View>
          <View style={styles.linha}></View>
        </View>
        <View style={styles.badge}>
          <Image source={require('../assets/images/images.jpg')} style={{ width: 22, height: 25 }}></Image>
        </View>
        <View style={styles.parte2}>
          <Text style={styles.titulo}>{item.horaInicio}</Text>
          <Text style={styles.titulo}>Descrição: {item.descricao}</Text>
          <TouchableOpacity style={styles.button} onPress={openScreen} onPressOut={trocarImagem}>
            <Text style={styles.detalhes}>Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={dataEnc}
        extraData={dataObj}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'column',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  timeline: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  tituloTimeline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    justifyContent: 'center'
  },
  parte1: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  circulo: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#00315a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linha: {
    backgroundColor: '#C5C5C5',
    height: '100%',
    width: 2,
    justifyContent: 'center',

  },
  parte2: {
    flex: 7,
    padding: 5,
    paddingTop: 0,
    // backgroundColor: '#C5C5C5',
    borderRadius: 10,
  },
  badge: {
    // backgroundColor: '#F78B1F',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  descricao: {
    fontSize: 15,
    color: '#000'
  },
  data: {
    fontSize: 15,
    color: '#656565',
  },
  button:{
    backgroundColor: '#F78B1F',
    width: '25%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: '5%',
  },
  detalhes:{
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  }
});