import React, {useEffect, useState} from 'react';
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
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const saveAPIData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    const formdata = {
      name,
      age,
      email,
    };
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    });
    result = await result.json();
    console.log(result);
    console.warn('Data Added');
    setName('');
    setEmail('');
    setAge(0);
  };
  return (
    <View>
      <Text style={styles.heading}>Form For Students</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Enter your name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        value={age}
        placeholder="Enter your age"
        onChangeText={text => setAge(text)}
      />

      <Button title="SAVE DATA" onPress={saveAPIData} />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: 'red',
    margin: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: 'orange',
    borderWidth: 2,
    margin: 20,
  },
});

export default App;
