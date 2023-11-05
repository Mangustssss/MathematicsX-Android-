import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LandingPage = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SearchMenu');
    }, 500);
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