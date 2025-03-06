import React, {useEffect, useState} from 'react';
import ApiDataList from './Components/API-Testing/ApiDataList';
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
      <ApiDataList />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
