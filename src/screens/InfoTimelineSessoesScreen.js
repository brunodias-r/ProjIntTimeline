import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function InfoTimelineSessoesScreen({ route }) {
    
    // console.warn({route})
    const data = route.params;
    // const { dia, situacao, descricao, objetos, titulo } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.timeline}>
                <View style={styles.badge}>
                    {/* <Text style={styles.titulo}>{this.props.data.id}</Text> */}
                    <Image source={require('../assets/images/images.jpg')} style={{ width: 22, height: 25 }}></Image>
                </View>
                <View style={styles.parte2}>
                    <Text style={styles.titulo}>Dia: {JSON.stringify(data.dia)}</Text>
                    <Text style={styles.descricao}>Título: {JSON.stringify(data.titulo)}</Text>
                    <Text style={styles.descricao}>Situação: {JSON.stringify(data.situacao)}</Text>
                    <Text style={styles.data}>Descrição: {JSON.stringify(data.descricao)}</Text>
                    <Text style={styles.data}>Objetos: {JSON.stringify(data.objetos)}</Text> 
                </View> 
                {/* <View style={styles.parte2}>
                    <Text style={styles.titulo}>Dia: {data.dia}</Text>
                    <Text style={styles.data}>Título: {data.titulo}</Text>
                    <Text style={styles.descricao}>Situação: {data.situacao}</Text>
                    <Text style={styles.data}>Descrição: {data.descricao}</Text>
                    <Text style={styles.data}>Objetos: {data.objetos}</Text> 
                </View> */}
            </View>
        </View>
    )
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