import React, { Component, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';

// export default function TimelineSessoes() {
//   <View style={styles.container}>
//     <View style={styles.timeline}>
//       <View style={styles.parte1}>
//         <View style={styles.circulo} />
//         <View style={styles.linha}></View>
//       </View>
//       <View style={styles.badge}>
//         <Image source={require('../../assets/images/badge.png')} style={{ width: 22, height: 25 }}></Image>
//       </View>
//       <View style={styles.parte2}>
//         <TouchableOpacity>
//           <Text style={styles.titulo}>{this.props.data.unidadeCurricular.nome}</Text>
//         </TouchableOpacity>
//         <Text style={styles.descricao}>Descrição: {this.props.data.descricao}</Text>
//         <Text style={styles.data}>Código: {this.props.data.unidadeCurricular.codigo}</Text>
//         <Text style={styles.data}>Carga horária: {this.props.data.unidadeCurricular.horas}</Text>
//       </View>
//     </View>
//   </View>
// };

// export default function TimelineSessoes({ data }) {
//   <View style={styles.container}>
//     <View style={styles.timeline}>
//       <View style={styles.parte1}>
//         <View style={styles.circulo} />
//         <View style={styles.linha}></View>
//       </View>
//       <View style={styles.badge}>
//         <Image source={require('../../assets/images/badge.png')} style={{ width: 22, height: 25 }}></Image>
//       </View>
//       <View style={styles.parte2}>
//         <TouchableOpacity>
//           <Text style={styles.titulo}>{data.dia}</Text>
//         </TouchableOpacity>
//         <Text style={styles.data}>{data.situacao}</Text>
//         <Text style={styles.descricao}>Título: {data.titulo}</Text>
//         <Text style={styles.descricao}>Descrição: {data.descricao}</Text>
//         <Text style={styles.descricao}>Descrição: {data.objetos}</Text>
//       </View>
//     </View>
//   </View>
// };

export default function TimelineSessoes({data}) {

  const [imagem, setImagem] = useState(require('../../assets/images/relogio.png'));

  function trocarImagem() {
    setImagem(require('../../assets/images/verifica.png'))
  }

  <View style={styles.container}>
    <View style={styles.timeline}>
      <View style={styles.parte1}>
        <View style={styles.circulo}>
          <Image source={imagem} style={{ width: 19, height: 19 }} />
        </View>
        <View style={styles.linha}></View>
      </View>
      <View style={styles.badge}>
        <Image source={require('../../assets/images/images.jpg')} style={{ width: 22, height: 25 }}></Image>
      </View>
      <View style={styles.parte2}>
        <TouchableOpacity onPress={trocarImagem}>
          <Text style={styles.titulo}>{data.horaInicio}</Text>
          <Text style={styles.data}>Local: {data.local}</Text>
          <Text style={styles.descricao}>Semana: {data.semana}</Text>
          <Text style={styles.descricao}>Descrição do Encontro: {data.encontroTipo.descricao}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
};

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
    borderRadius: '50%',
    backgroundColor: '#00315a',
  },
  linha: {
    backgroundColor: '#00315a',
    height: '100%',
    width: 2,
    justifyContent: 'center',

  },
  parte2: {
    flex: 7,
    padding: 5,
    paddingTop: 0,
    backgroundColor: '#C5C5C5',
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