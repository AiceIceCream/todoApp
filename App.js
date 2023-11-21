import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import TaskList from './src/TaskList';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/logo.png')}
        style={styles.backgroundImage}
      >
        <Text style={[styles.title, { borderWidth: 1, width: 350, textAlign: 'center', borderRadius: 10, borderColor: 'skyblue', backgroundColor: 'rgba(212, 255, 249, 0.7)' }]}>To Do List</Text>
        <TaskList />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  backgroundImage: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
