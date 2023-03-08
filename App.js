import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react'



export default function App() {

  const showToast = () => {
    //Console OUTPUT
    console.log("Toast clicked :D")
    ToastAndroid.show(
      //Button show name
      "Hello Toast",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    )
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React-Native!</Text>
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.button}
        onPress={() => showToast()}>
        <Text style={{ color: "#fff" }}>Press me!</Text>
      </TouchableOpacity>
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

  text: {
    color: "#191970",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 50
  },

  button: {
    borderRadius: 10,
    backgroundColor: "#000080",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  }


});
