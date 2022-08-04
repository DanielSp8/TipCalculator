import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipPercent: 15,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Tip Calculator</Text>

        <Text style={styles.regularText}>Meal Price</Text>
        <TextInput style={styles.textInput} label="mealPrice"></TextInput>

        <Text style={styles.regularText}>Gratuity Percent</Text>
        <TextInput
          style={styles.textInputTip}
          placeholder="15"
          label="tipPercentage"
        ></TextInput>

        <Text style={styles.regularText}>Tip Amount</Text>
        <Text style={styles.tipAmountText}></Text>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "deepskyblue",
    padding: 5,
    borderRadius: 9,
  },
  regularText: {
    fontSize: 14,
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 50,
    fontSize: 14,
    alignSelf: "center",
    backgroundColor: "bisque",
  },
  tipAmountText: {
    borderWidth: 1,
    paddingLeft: 75,
    fontSize: 14,
    alignSelf: "center",
    backgroundColor: "deepskyblue",
  },
  textInputTip: {
    borderWidth: 1,
    paddingLeft: 50,
    fontSize: 14,
    alignSelf: "center",
    backgroundColor: "deepskyblue",
  },
});

export default App;
