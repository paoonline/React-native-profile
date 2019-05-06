import React from "react";
import {Text, View, Image} from "react-native";
import { Route, Link, NativeRouter, withRouter } from "react-router-native";
import {styles} from '../style/style'
import Image_box from '../components/image/image'
import Hoc from '../hoc/hoc'

const Porfolio = ( match ) => {
    let view
    switch(match.location.pathname){
        case '/port1':
            view = (
                <>
                    <Image_box style={{width: 300, height: 220}} source={require('../assets/d1.jpg')}/>
                    <Image_box style={{width: 300, height: 220}} source={require('../assets/d2.jpg')}/>
                </>
            )
            break;
        case '/port2':
            view = (
                <>
                    <Image_box style={{width: 270, height: 300}} source={require('../assets/b1.jpg')}/>
                    <Image_box style={{width: 270, height: 300}} source={require('../assets/b2.jpg')}/>
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

const Porfolios = () => {
    return (
        <NativeRouter>
            <View>
                <Link
                    to={`/port1`}
                    style={styles.subNavItem}
                    underlayColor="#f0f4f7"
                >
                    <Text style={styles.color_blue}>Dashboard Data-sci team</Text>
                </Link>
                <Link
                    to={`/port2`}
                    style={styles.subNavItem}
                    underlayColor="#f0f4f7"
                >
                    <Text style={styles.color_blue}>Burger Project</Text>
                </Link>

                    <Route path={`/port1`} component={Porfolio} />
                    <Route path={`/port2`} component={Porfolio} />
                    {/* <Route
                        exact
                        path={`/`}
                        render={() => <Text style={{...styles.topic, ...styles.left}}>Please select a topic.</Text>}
                    /> */}
                </View>
        </NativeRouter>
    );
}

export default Hoc(Porfolios)