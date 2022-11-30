import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TimelineSessoesScreen from './src/screens/TimelineSessoesScreen.js'
import IndexSrc from './src/index.js'

export default function App() {
  return (
    <IndexSrc></IndexSrc>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
