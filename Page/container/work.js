import React from "react";
import {Text, View, Image } from "react-native";
import {styles} from '../style/style'

const Work = () => 
<>
  <View style={{
      flexDirection: 'column',
      justifyContent: 'space-between',
  }}>
      <View>
          <Text style={{...styles.header, ...styles.bold}}>Experience</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{ ...styles.top}}>
              <Image style={{width: 180, height: 180}} source={require('../assets/pantip.jpg')} />
          </View>
          <View style={{ ...styles.top, alignSelf: 'center'}}>
              <Text style={styles.header}>Internet Marketing (Pantip.com)</Text>
              <Text style={styles.header}>2018 Jan present</Text>
          </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <View style={{...styles.top}}>
              <Text style={{...styles.header, ...styles.bold}}>Responsible Data-sci team dashboard</Text>
              <Text style={{...styles.header, ...styles.top}}>create all stats from pantip.com to ui and chart.js</Text>
              <Text style={{...styles.header, ...styles.top}}>frontend develop with jquery and react.js.</Text>
              <Text style={{...styles.header, ...styles.top}}>develop with node.js language via restful api, webservice etc.</Text>
              <Text style={{...styles.header, ...styles.top}}>gitlab manage for deploy to server.</Text>
              <Text style={{...styles.header, ...styles.top}}>manage database with mongodb.</Text>
              <Text style={{...styles.header, ...styles.top}}>use express.js for backend develop.</Text>
              <Text style={{...styles.header, ...styles.top}}>create chat bot ui with dialogflow.</Text>
              <Text style={{...styles.header, ...styles.top}}>learning new technology.</Text>
          </View>
      </View>
  </View>
</>

export default Work