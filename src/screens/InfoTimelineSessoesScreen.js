import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import ObjetoAprendizagem from "../components/objetoAprendizagem";
// import Encontro from '../components/encontro/index.js';

export default function InfoTimelineSessoesScreen({ route }) {

    const { dataObj } = route.params;
    const [dataSit, setDataSit] = useState([]);

    const fetchDataSit = async () => {
        const resp = await fetch("http://academico3.rj.senac.br:8080/api/SituacaoAprendizagem");
        const dataSit = await resp.json();
        setDataSit(dataSit);
        console.log(dataSit)
    };
    useEffect(() => {
        fetchDataSit();
    }, []);

    const renderItemObj = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.timeline}>
                {/* <View style={styles.badge}>
                    <Image source={require('../assets/images/images.jpg')} style={{ width: 22, height: 25 }}></Image>
                </View> */}
                <View style={styles.parte2}>
                    {/* <Text style={styles.descricao}>ID: {item.id}</Text> */}
                    {/* <Text style={styles.descricao}>{item.grauDificuldade.descricao}</Text> */}
                    <Text style={styles.descricao}>{item.descricao}</Text>
                </View>
            </View>
        </View>
    )


    const renderItemSit = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.timeline}>
                {/* <View style={styles.badge}>
                    <Image source={require('../assets/images/images.jpg')} style={{ width: 22, height: 25 }}></Image>
                </View> */}
                <View style={styles.parte2}>
                    {/* <Text style={styles.descricao}>ID: {item.id}</Text> */}
                    <Text style={styles.titulo}>{item.titulo}</Text>
                    <Text style={styles.descricao}>{item.descricao}</Text>
                    {/* <Text style={styles.descricao}>{item.grauDificuldade.descricao}</Text> */}
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
                data={dataSit}
                keyExtractor={(item) => item.id}
                renderItem={renderItemSit}
            />
            {/* <FlatList
                data={dataObj}
                keyExtractor={(item) => item.id}
                renderItem={renderItemObj}
            /> */}
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