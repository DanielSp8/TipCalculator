import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View } from 'react-native';

const TipAmounts = () => {
    const [shouldShow, setShouldShow] = useState(true);
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={StyleSheet.container}>
                {shouldShow ? ( 
                    <View>
                        <Text style={styles.tipAmountText} name="tipFifteenPercentText">
                        15% Tip: ${this.state.tipPercentFifteenAmount}
                        </Text>
                        <Text style={styles.tipAmountText} name="tipFifteenPercentText">
                        With Tip: ${this.state.sumTotalWithFifteenTip}
                        </Text>

                        <Text style={styles.tipAmountText} name="tipTwentyPercentText">
                        20% Tip: ${this.state.tipPercentTwentyAmount}
                        </Text>
                        <Text style={styles.tipAmountText} name="tipTwentyPercentText">
                        With Tip: ${this.state.sumTotalWithTwentyTip}
                        </Text>

                        <Text style={styles.tipAmountText} name="tipTwentyFivePercentText">
                        25% Tip: ${this.state.tipPercentTwentyFiveAmount}
                        </Text>
                        <Text style={styles.tipAmountText} name="tipTwentyFivePercentText">
                        With Tip: ${this.state.sumTotalWithTwentyFiveTip}
                        </Text>    
                    </View>    
                ) : n
            </View>
        </SafeAreaView>
    )

}