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
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    //Call API
    const url = 'http://10.0.2.2:3000/users';
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
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              key={item?.id}
              style={{
                padding: 10,
                borderColor: 'black',
                borderWidth: 2,
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                }}>
                Id : {item?.id}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  paddingTop: 5,
                }}>
                Title : {item?.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  paddingTop: 5,
                }}>
                Body : {item?.email}
              </Text>
            </View>
          )}
        />
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default App;
