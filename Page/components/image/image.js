import React from "react";
import {View, Image } from "react-native";
import {styles} from '../../style/style'

const Image_box = (props) => (
    <View style={{ ...styles.top}}>
        <Image style={props.style} source={props.source} />
    </View>
)
export default Image_box