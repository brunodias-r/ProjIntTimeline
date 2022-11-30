import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import React from 'react';

export default function AtividadeEstudoPrevioScreen(){
  return (
    <View style={styles.container}>
      <Text>
        Atividade de estudo prévio.
        <Button>
          <Text>Estudo prévio</Text>
        </Button>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});