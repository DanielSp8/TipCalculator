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
      tipPercentFifteenAmount: "",
      tipPercentTwentyAmount: "",
      TipPercentTwentyFiveAmount: "",
      sumTotalWithFifteenTip: "",
      sumTotalWithTwentyTip: "",
      sumTotalWithTwentyFiveTip: "",
      shouldShow: false,
    };

    this.FindTipAmount = this.FindTipAmount.bind(this);
    this.ResetValues = this.ResetValues.bind(this);
  }

  ResetValues() {
    this.setState({ tipPercentFifteenAmount: 0 });
    this.setState({ tipPercentTwentyAmount: 0 });
    this.setState({ tipPercentTwentyFiveAmount: 0 });
    this.setState({ sumTotalWithFifteenTip: 0 });
    this.setState({ sumTotalWithTwentyTip: 0 });
    this.setState({ sumTotalWithTwentyFiveTip: 0 });
  }

  FindTipAmount() {
    var mealPrice = parseFloat(this.state.mealCost);
    if (isNaN(mealPrice)) {
      alert("Enter a valid number for the meal price!");
      this.setState({ mealCost: "" });
      this.ResetValues();
    } else {
      mealPrice = mealPrice.toFixed(2);
      mealPrice = parseFloat(mealPrice);

      tipPercentFifteen = parseFloat(tipPercentFifteen);
      tipPercentTwenty = parseFloat(tipPercentTwenty);
      tipPercentTwentyFive = parseFloat(tipPercentTwentyFive);

      var tipPercentFifteen = (mealPrice * 0.15).toFixed(2);
      var tipPercentTwenty = (mealPrice * 0.2).toFixed(2);
      var tipPercentTwentyFive = (mealPrice * 0.25).toFixed(2);

      var sumWithFifteenTip = mealPrice + tipPercentFifteen;
      var sumWithTwentyTip = mealPrice + tipPercentTwenty;
      var sumWithTwentyFiveTip = mealPrice + tipPercentTwentyFive;

      this.setState({ shouldShow: true });
      this.setState({ tipPercentFifteenAmount: tipPercentFifteen });
      this.setState({ tipPercentTwentyAmount: tipPercentTwenty });
      this.setState({ tipPercentTwentyFiveAmount: tipPercentTwentyFive });
      this.setState({ sumTotalWithFifteenTip: sumWithFifteenTip });
      this.setState({ sumTotalWithTwentyTip: sumWithTwentyTip });
      this.setState({ sumTotalWithTwentyFiveTip: sumWithTwentyFiveTip });
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

        <Button
          onPress={this.FindTipAmount}
          title="Find Tip"
          color="forestgreen"
        />

        {this.state.shouldShow && (
          <View>
            <Text style={styles.tipAmountText} name="tipFifteenPercentText">
              15% Tip: ${this.state.tipPercentFifteenAmount}
            </Text>
            <Text
              style={styles.tipAmountText}
              name="tipTotalFifteenPercentText"
            >
              With Tip: ${this.state.sumTotalWithFifteenTip}
            </Text>

            <Text style={styles.tipAmountText} name="tipTwentyPercentText">
              20% Tip: ${this.state.tipPercentTwentyAmount}
            </Text>
            <Text style={styles.tipAmountText} name="tipTotalTwentyPercentText">
              With Tip: ${this.state.sumTotalWithTwentyTip}
            </Text>

            <Text style={styles.tipAmountText} name="tipTwentyFivePercentText">
              25% Tip: ${this.state.tipPercentTwentyFiveAmount}
            </Text>
            <Text
              style={styles.tipAmountText}
              name="tipTotalTwentyFivePercentText"
            >
              With Tip: ${this.state.sumTotalWithTwentyFiveTip}
            </Text>
          </View>
        )}
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
    borderColor: "white",
    backgroundColor: "forestgreen",
    padding: 5,
    borderRadius: 9,
  },
  regularText: {
    fontSize: 22,
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 75,
    fontSize: 22,
    alignSelf: "center",
    backgroundColor: "forestgreen",
  },
  tipAmountText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
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
