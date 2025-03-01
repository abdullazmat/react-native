import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

function App() {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    //Call API
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    if (result) setData(result);
    console.log(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <View>
        {data?.map((dt, index) => (
          <View
            key={index}
            style={{
              padding: 10,
              borderColor: 'black',
              borderWidth: 2,
              margin: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
              }}>
              Id : {dt?.id}
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingTop: 5,
              }}>
              Title : {dt?.title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingTop: 5,
              }}>
              Body : {dt?.body}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default App;
