import React, { Component, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Encontro({ item }) {
    
    return (
        <View style={styles.parte2}>
            <Text style={styles.descricao}>{item.horaInicio}</Text>
            <Text style={styles.descricao}>{item.local}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    parte2: {
        flex: 7,
        padding: 5,
        paddingTop: 0,
        backgroundColor: '#C5C5C5',
        borderRadius: 10,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    descricao: {
        fontSize: 15,
        color: '#000'
    },
    dia: {
        fontSize: 15,
        color: '#656565',
    },
});