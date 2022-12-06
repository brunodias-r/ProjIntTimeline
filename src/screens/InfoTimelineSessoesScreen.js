import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import Encontro from '../components/encontro/index.js';

export default function InfoTimelineSessoesScreen({ route }) {

    const { dataObj, dataSit } = route.params;

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.timeline}>
                <View style={styles.badge}>
                    <Image source={require('../assets/images/images.jpg')} style={{ width: 22, height: 25 }}></Image>
                </View>
                <View style={styles.parte2}>
                    <Text style={styles.descricao}>{item.grauDificuldade.descricao}</Text>
                    <Text style={styles.descricao}>{item.descricao}</Text>
                </View>
            </View>
        </View>
    )

    // const renderItem = () => (
    //     <View style={styles.container}>
    //         <View style={styles.timeline}>
    //             <View style={styles.badge}>
    //                 <Image source={require('../assets/images/images.jpg')} style={{ width: 22, height: 25 }}></Image>
    //             </View>
    //             <View style={styles.parte2}>
    //                 <Text style={styles.descricao}>{route.grauDificuldade.descricao}</Text>
    //                 <Text style={styles.descricao}>{route.descricao}</Text>
    //             </View>
    //         </View>
    //     </View>
    // )


    return (
        <SafeAreaView>
            <FlatList
                data={dataObj}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
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