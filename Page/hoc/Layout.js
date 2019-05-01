import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
      fontSize: 20,
      marginTop: 20
    },
});

const Layout = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {props.children}
            </ScrollView>
        </View>
    )
}

export default Layout