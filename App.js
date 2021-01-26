import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, TouchableOpacity, Text, StyleSheet, Image, TextInput, Dimensions, ToastAndroid } from "react-native";
import CheckBox from '@react-native-community/checkbox';

function App() {
  const [inputFirst, setInputFirst] = useState("");
  const [inputSecond, setInputSecond] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [checkBoxFirst, setCheckBoxFirst] = useState(false);
  const [checkBoxSecond, setCheckBoxSecond] = useState(false);
  const [checkBoxThree, setCheckBoxThree] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);
  const operatorLabel = [
    {
      name: '+'
    },
    {
      name: '-'
    },
    {
      name: 'x'
    },
    {
      name: '/'
    }
  ];

  const onPress = (element) => {
    const allArray = [];

    const nilai1 = parseInt(inputFirst);
    const nilai2 = parseInt(inputSecond);
    const nilai3 = parseInt(inputThree);

    allArray.push(checkBoxFirst ? nilai1 : parseInt(NaN));
    allArray.push(checkBoxSecond ? nilai2 : parseInt(NaN));
    allArray.push(checkBoxThree ? nilai3 : parseInt(NaN));

    const newArray = allArray.filter((value) => {
      return !Number.isNaN(value);
    });

    if (newArray.length < 2) return ToastAndroid.show('Harap Masukkan Minimal 2 Input Nilai', 3);

    let total = newArray[0];
    switch (element.name) {
      case "+":
        newArray.map((element, index) => {
          if (index !== 0) {
            total = total + element
          }
        });
        break;
      case "-":
        newArray.map((element, index) => {
          if (index !== 0) {
            total = total - element
          }
        });
        break;
      case "x":
        newArray.map((element, index) => {
          if (index !== 0) {
            total = total * element
          }
        });
        break;
      case "/":
        newArray.map((element, index) => {
          if (index !== 0) {
            total = total / element
          }
        });
        break;
    }

    setFinalTotal(total);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <Image style={{ width: '100%', height: '100%', position: 'absolute' }} resizeMode="stretch" source={{ uri: 'https://static1.squarespace.com/static/5a1f0053b07869a7e6649ee7/5a206a689140b77b5486ea9b/5a86e92653450abff5cdeb93/1583935491253/Grid-two-BLUE.png?format=1500w' }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 8, padding: 24 }}>
            <View style={{ flexDirection: 'column', marginBottom: 12 }}>
              <TextInput
                onChangeText={(value) => setInputFirst(value)}
                value={inputFirst}
                style={{ borderWidth: 2, padding: 12, height: fullHeight / 2 * 0.10, marginBottom: 12 }}
              />
              <TextInput
                onChangeText={(value) => setInputSecond(value)}
                value={inputSecond}
                style={{ borderWidth: 2, padding: 12, height: fullHeight / 2 * 0.10, marginBottom: 12 }}
              />
              <TextInput
                onChangeText={(value) => setInputThree(value)}
                value={inputThree}
                style={{ borderWidth: 2, padding: 12, height: fullHeight / 2 * 0.10, marginBottom: 12 }}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              {operatorLabel.map((element, index) => (
                <TouchableOpacity key={index} onPress={() => onPress(element)}>
                  <View style={{ paddingHorizontal: 18, paddingVertical: 4, borderWidth: 2, borderRadius: 8 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{element.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hasil: </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{finalTotal}</Text>
            </View>
          </View>
          <View style={{ padding: 24 }}>
            <CheckBox
              disabled={false}
              value={checkBoxFirst}
              onValueChange={(newValue) => setCheckBoxFirst(newValue)}
              lineWidth={100}
              style={{ borderWidth: 2, padding: 12, height: fullHeight / 2 * 0.10, marginBottom: 12 }}
            />
            <CheckBox
              disabled={false}
              value={checkBoxSecond}
              onValueChange={(newValue) => setCheckBoxSecond(newValue)}
              lineWidth={100}
              style={{ borderWidth: 2, padding: 12, height: fullHeight / 2 * 0.10, marginBottom: 12 }}
            />
            <CheckBox
              disabled={false}
              value={checkBoxThree}
              onValueChange={(newValue) => setCheckBoxThree(newValue)}
              lineWidth={100}
              style={{ borderWidth: 2, padding: 12, height: fullHeight / 2 * 0.10, marginBottom: 12 }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const fullHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default App;