import React, {useEffect, useState} from 'react';
import APITest from './Components/API-Testing/API-test';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

function App() {
  return (
    <View>
      <APITest />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
