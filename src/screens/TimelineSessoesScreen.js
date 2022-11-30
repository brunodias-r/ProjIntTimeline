import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import data from '../models/SituacaoAprendizagem.js'

export default function TimelineSessoesScreen({ navigation }) {

  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const resp = await fetch("http://academico3.rj.senac.br:8080/api/Competencia");
  //   const data = await resp.json();
  //   setData(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const renderItem =
  //   ({ item }) => (
  //     <View>
  //       <View style={styles.timeline}>
  //         <View style={styles.parte1}>
  //           <View style={styles.circulo} />
  //           <View style={styles.linha}></View>
  //         </View>
  //         <View style={styles.badge}>
  //           <Image source={require('../assets/images/images.jpg')} style={{ width: 22, height: 25 }}></Image>
  //         </View>
  //         <View style={styles.parte2}>
  //           <TouchableOpacity 
  //           onPress={navigation.navigate('Informações', {data})}
  //           >
  //             <Text style={styles.titulo}>{item.unidadeCurricular.nome}</Text>
  //           </TouchableOpacity>
  //           <Text style={styles.descricao}>Descrição: {item.descricao}</Text>
  //           <Text style={styles.data}>Código: {item.unidadeCurricular.codigo}</Text>
  //           <Text style={styles.data}>Carga horária: {item.unidadeCurricular.horas}</Text>
  //         </View>
  //       </View>
  //     </View>
  //   );

  const [imagem, setImagem] = useState(require('../assets/images/relogio.png'));

  // console.warn({route})
  function openScreen() {
    // navigation.navigate('Informações', { dia: data.dia, titulo: data.titulo, situacao: data.situacao, descricao: data.descricao })
    navigation.navigate('Informações', data)
  }

  function trocarImagem() {
    setImagem(require('../assets/images/verifica.png'))
  }

  const renderItem =
    ({ item }) => (
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
            <TouchableOpacity onSele onPress={openScreen} onPressOut={trocarImagem}>
              <Text style={styles.titulo}>{item.dia}</Text>
              <Text style={styles.data}>{item.situacao}</Text>
              <Text style={styles.descricao}>Título: {item.titulo}</Text>
              <Text style={styles.descricao}>Descrição: {item.descricao}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
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
});