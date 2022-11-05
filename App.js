import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import RandomBackImage from "./BackgroundImages";

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
    this.ResetValues = this.ResetValues.bind(this);
  }

  ResetValues() {
    this.setState({ tipAmount: 0 });
    this.setState({ sumTotal: 0 });
  }

  FindTipAmount() {
    var tipPercent = parseFloat(this.state.tipPercent * 0.01);
    var mealPrice = parseFloat(this.state.mealCost);
    var tipFound = mealPrice * tipPercent;
    var mealTotal = mealPrice + tipFound;

    mealPrice = mealPrice.toFixed(2);
    tipFound = tipFound.toFixed(2);
    mealTotal = mealTotal.toFixed(2);

    this.setState({ tipAmount: tipFound });
    this.setState({ sumTotal: mealTotal });

    if (isNaN(this.state.mealCost)) {
      alert("Enter a valid number for the meal price!");
      this.setState({ mealCost: 0 });
      this.ResetValues();
    }
    if (isNaN(this.state.tipPercent)) {
      alert("Enter a valid number for the tip percent!");
      this.setState({ tipPercent: 15 });
      this.ResetValues();
    }
  }

  render() {
    return (
      <ImageBackground source={RandomBackImage} style={styles.backgroundImage}>
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
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
    fontSize: 22,
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 25,
    fontSize: 22,
    alignSelf: "center",
    backgroundColor: "bisque",
  },
  tipAmountText: {
    borderWidth: 1,
    paddingLeft: 75,
    fontSize: 22,
    alignSelf: "center",
    backgroundColor: "deepskyblue",
  },
  textInputTip: {
    borderWidth: 1,
    paddingLeft: 50,
    fontSize: 22,
    alignSelf: "center",
    backgroundColor: "deepskyblue",
  },
  totalAmountText: {
    borderWidth: 1,
    paddingLeft: 75,
    fontSize: 24,
    alignSelf: "center",
    backgroundColor: "forestgreen",
  },
});

export default App;
