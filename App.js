import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { Card } from "@rneui/themed";
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
    this.setState({ shouldShow: false });
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

      var tipPercentFifteen = (mealPrice * 0.15).toFixed(2);
      var tipPercentTwenty = (mealPrice * 0.2).toFixed(2);
      var tipPercentTwentyFive = (mealPrice * 0.25).toFixed(2);

      tipPercentFifteen = parseFloat(tipPercentFifteen);
      tipPercentTwenty = parseFloat(tipPercentTwenty);
      tipPercentTwentyFive = parseFloat(tipPercentTwentyFive);

      var sumWithFifteenTip = (mealPrice + tipPercentFifteen).toFixed(2);
      var sumWithTwentyTip = (mealPrice + tipPercentTwenty).toFixed(2);
      var sumWithTwentyFiveTip = (mealPrice + tipPercentTwentyFive).toFixed(2);

      this.setState({ shouldShow: true });
      this.setState({ tipPercentFifteenAmount: tipPercentFifteen.toFixed(2) });
      this.setState({ tipPercentTwentyAmount: tipPercentTwenty.toFixed(2) });
      this.setState({
        tipPercentTwentyFiveAmount: tipPercentTwentyFive.toFixed(2),
      });
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
          <Card>
            <Text style={styles.tipAmountText} name="tipFifteenPercentText">
              15% Tip: ${this.state.tipPercentFifteenAmount}
            </Text>
            <Text
              style={styles.tipAmountText}
              name="tipTotalFifteenPercentText"
            >
              Meal with Tip: ${this.state.sumTotalWithFifteenTip}
            </Text>

            <Card.Divider />

            <Text style={styles.tipAmountText} name="tipTwentyPercentText">
              20% Tip: ${this.state.tipPercentTwentyAmount}
            </Text>
            <Text style={styles.tipAmountText} name="tipTotalTwentyPercentText">
              Meal with Tip: ${this.state.sumTotalWithTwentyTip}
            </Text>

            <Card.Divider />

            <Text style={styles.tipAmountText} name="tipTwentyFivePercentText">
              25% Tip: ${this.state.tipPercentTwentyFiveAmount}
            </Text>
            <Text
              style={styles.tipAmountText}
              name="tipTotalTwentyFivePercentText"
            >
              Meal with Tip: ${this.state.sumTotalWithTwentyFiveTip}
            </Text>
          </Card>
        )}
        <StatusBar style="auto" />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default App;
