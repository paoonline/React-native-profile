import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import Image_box from '../components/image/image'
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render(){
    return (
      <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image_box style={{width: 200, height: 200, marginTop: 40, marginBottom:10}} source={require('../assets/profile.jpg')}/>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Experience')}>
              <Text>Experience</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Port')}>
              <Text>Portfolio</Text>
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.button}
              onPress={this._signOutAsync}
             >
              <Text>Sign out</Text>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

export default HomeScreen