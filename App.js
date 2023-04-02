import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from "./source/components/title/"
import Main from "./source/components/Main/"

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <Main></Main>
    </View>
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
