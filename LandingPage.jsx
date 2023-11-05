import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LandingPage = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the main page after a 2-second delay (adjust as needed)
    setTimeout(() => {
      navigation.navigate('SearchMenu');
    }, 1000);
  }, []);

  return (
    <View style={StyleSheet}>
        <Image
            style={styles.image}
            source={require("./assets/logo.png")}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#363642'
    },
    image: {
        height: 200,
    },
  
  });

export default LandingPage;