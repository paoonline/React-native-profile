import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
      fontSize: 20,
      marginTop: 20
    },
});

const Hoc = Comp => ({children, ...props}) => (
    <ScrollView>
        <View style={styles.container}>
            <Comp {...props} style={styles.container}/>
        </View>
    </ScrollView>
)

export default Hoc