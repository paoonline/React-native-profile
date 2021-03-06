import React from "react";
import {Text, View } from "react-native";
import {styles} from '../style/style'
import Image_box from '../components/image/image'
import Hoc from '../hoc/hoc'

const Profile = () =>
    <>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Image_box style={{width: 130, height: 130}} source={require('../assets/profile.jpg')}/>
                <View style={{ ...styles.top, alignSelf: 'center'}}>
                    <Text style={styles.header}>Nattawut Visuttipinat</Text>
                    <Text style={{...styles.header, ...styles.top}}>Age 29</Text>
                    <Text style={{...styles.header, ...styles.top}}>Live in bangkok</Text>
                    <Text style={{...styles.header, ...styles.top}}>Career Software Engineer</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <View style={{...styles.top}}>
                    <Text style={{...styles.header, ...styles.bold}}>Skill</Text>
                    <Text style={{...styles.header, ...styles.top}}>React.js, React Native</Text>
                    <Text style={{...styles.header, ...styles.top}}>Node.js</Text>
                    <Text style={{...styles.header, ...styles.top}}>MongoDB</Text>
                </View>
            </View>
        </View>
    </>

export default Hoc(Profile)