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

function ApiDataList() {
  const [data, setData] = useState(null);

  const getAPIData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let res = await fetch(url);
    res = await res.json();
    if (res) {
      console.log(data);
      setData(res);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerwrap}>
        <Text>Name</Text>
        <Text>Age</Text>
        <Text>Email</Text>
      </View>
      {data?.map(item => (
        <View style={styles.datawrap}>
          <Text>{item?.name}</Text>
          <Text>{item?.age}</Text>
          <Text>{item?.email}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerwrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
  },

  datawrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    color: 'white',
    padding: 5,
    marginTop: 10,
  },
});

export default ApiDataList;
