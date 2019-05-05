import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {styles} from '../style/style'

const style = StyleSheet.create({
    container: {
      fontSize: 20,
      marginTop: 20,
      ...styles.left
    },
});

const Hoc = Comp => ({children, ...props}) => (
    <ScrollView>
        <View style={style.container}>
            <Comp {...props} style={style.container}/>
        </View>
    </ScrollView>
)

export default Hoc