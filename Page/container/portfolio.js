import React from "react";
import {Text, View, Image} from "react-native";
import { Route, Link } from "react-router-native";
import {styles} from '../style/style'

const port = ({ match }) => {
    let view
    switch(match.params.portId){
        case 'port1':
            view = (
                <>
                    <View style={{ ...styles.top}}>
                        <Image style={{width: 300, height: 180}} source={require('../assets/d1.jpg')} />
                    </View>
                    <View style={{ ...styles.top}}>
                        <Image style={{width: 300, height: 180}} source={require('../assets/d2.jpg')} />
                    </View>
                </>
            )
            break;            
        case 'port2':
            view = (
                <>
                    <View style={{ ...styles.top}}>
                        <Image style={{width: 180, height: 200}} source={require('../assets/b1.jpg')} />
                    </View>
                    <View style={{ ...styles.top}}>
                        <Image style={{width: 180, height: 200}} source={require('../assets/b2.jpg')} />
                    </View>
                </>
            )
        break;
        default:
    }
    
    return (
            <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                {view}
            </View>
        )
};
  
const Ports = ({ match }) => (
    <View>
        <Text style={{...styles.header, ...styles.bold}}>Portfolio</Text>
        <View>
        <Link
            to={`${match.url}/port1`}
            style={styles.subNavItem}
            underlayColor="#f0f4f7"
        >
            <Text>Dashboard Data-sci team</Text>
        </Link>
        <Link
            to={`${match.url}/port2`}
            style={styles.subNavItem}
            underlayColor="#f0f4f7"
        >
            <Text>Burger Project</Text>
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