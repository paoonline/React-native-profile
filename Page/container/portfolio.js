import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Route, Link } from "react-router-native";

const styles = StyleSheet.create({
    subNavItem: {
      padding: 5
    },
    port: {
      textAlign: "center",
      fontSize: 15
    }
});

const port = ({ match }) => (
    <Text style={styles.port}>{match.params.portId}</Text>
  );
  
const Ports = ({ match }) => (
    <View>
        <Text style={styles.header}>Port</Text>
        <View>
        <Link
            to={`${match.url}/rendering`}
            style={styles.subNavItem}
            underlayColor="#f0f4f7"
        >
            <Text>Rendering with React</Text>
        </Link>
        <Link
            to={`${match.url}/components`}
            style={styles.subNavItem}
            underlayColor="#f0f4f7"
        >
            <Text>Components</Text>
        </Link>
        <Link
            to={`${match.url}/props-v-state`}
            style={styles.subNavItem}
            underlayColor="#f0f4f7"
        >
            <Text>Props v. State</Text>
        </Link>
        </View>

        <Route path={`${match.path}/:portId`} component={port} />
        <Route
        exact
        path={match.path}
        render={() => <Text style={styles.topic}>Please select a topic.</Text>}
        />
    </View>
);

export default Ports