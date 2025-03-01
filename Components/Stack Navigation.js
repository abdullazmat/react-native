import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home', // Ensures the title stays in the center

            headerRight: () => (
              <Button
                onPress={() => alert('Right Button Clicked')}
                title="Right"
              />
            ),
            headerTintColor: 'orange',
          }}
        />

        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen = props => {
  const [name, setName] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screeen</Text>

      <TextInput
        placeholder=" Enter Your Name"
        style={{borderColor: 'black', borderWidth: 2, margin: 10, width: 250}}
        onChangeText={text => setName(text)}
      />

      <Button
        title="Navigate"
        onPress={() => props.navigation.navigate('Login', {name})}></Button>
    </View>
  );
};

const Login = props => {
  const {name} = props.route.params || 'no name';

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Log In</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 20}}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
