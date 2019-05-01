import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
      fontSize: 20,
      marginTop: 20
    },
});

const Layout = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

export default Layout