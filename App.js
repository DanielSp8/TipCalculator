import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealCost: "",
      tipPercent: 15,
      tipAmount: "",
      sumTotal: "",
    };

    this.FindTipAmount = this.FindTipAmount.bind(this);
  }

  FindTipAmount() {
    var tipPercent = parseFloat(this.state.tipPercent * 0.01);
    var mealPrice = parseFloat(this.state.mealCost);
    var tipFound = mealPrice * tipPercent;

    var mealTotal = mealPrice + tipFound;

    // alert(`this.state.mealCost ${this.state.mealCost}
    //          this.state.tipPercent ${this.state.tipPercent}
    //          this.state.tipAmount ${this.state.tipAmount}`);
    this.setState({ tipAmount: tipFound });
    this.setState({ sumTotal: mealTotal });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Tip Calculator</Text>

        <Text style={styles.regularText}>Meal Price</Text>
        <TextInput
          name="mealCost"
          autoComplete="off"
          autoCorrect={false}
          keyboardType="decimal-pad"
          style={styles.textInput}
          returnKeyType="next"
          textAlign="center"
          onChangeText={(mealCost) => this.setState({ mealCost })}
        >
          {this.state.mealCost}
        </TextInput>

        <Text style={styles.regularText}>Gratuity Percent</Text>
        <TextInput
          style={styles.textInputTip}
          name="tipPercentage"
          autoComplete="off"
          autoCorrect={false}
          keyboardType="number-pad"
          returnKeyType="next"
          textAlign="center"
          maxLength={3}
          onChangeText={(tipPercent) => this.setState({ tipPercent })}
        >
          {this.state.tipPercent}
        </TextInput>

        <Button
          onPress={this.FindTipAmount}
          title="Find Tip"
          color="deepskyblue"
        />

        <Text style={styles.regularText}>Tip Amount</Text>
        <Text style={styles.tipAmountText} name="tipAmountText">
          {this.state.tipAmount}
        </Text>

        <Text style={styles.regularText}>Sum Total</Text>
        <Text style={styles.totalAmountText} name="sumTotal">
          {this.state.sumTotal}
        </Text>

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
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 25,
    fontSize: 18,
    alignSelf: "center",
    backgroundColor: "bisque",
  },
  tipAmountText: {
    borderWidth: 1,
    paddingLeft: 75,
    fontSize: 18,
    alignSelf: "center",
    backgroundColor: "deepskyblue",
  },
  textInputTip: {
    borderWidth: 1,
    paddingLeft: 50,
    fontSize: 18,
    alignSelf: "center",
    backgroundColor: "deepskyblue",
  },
  totalAmountText: {
    borderWidth: 1,
    paddingLeft: 75,
    fontSize: 18,
    alignSelf: "center",
    backgroundColor: "forestgreen",
  },
});

export default App;
