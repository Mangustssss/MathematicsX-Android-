import React, { useState, useCallback } from 'react'
import { StyleSheet, Image, Text, View, Button } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function QuadraticTask() {
    const [isLoaded] = useFonts({
        "poppins-mid": require("../assets/fonts/Poppins-Black.ttf"),
        "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "poppins-italic": require("../assets/fonts/Poppins-Italic.ttf"),
    })
    
    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
          await SplashScreen.hideAsync(); 
        }
      }, [isLoaded]);
    
      if (!isLoaded) {
        return null;
      }
    return (
        <View style={styles.container}>
            <Text>
              Hello
            </Text>
            
            {/* <TouchableOpacity 
              style={styles.button}
              onPress={() => {

              }}
            >
              <Text style={styles.buttonText}>Train now</Text>
            </TouchableOpacity> */}



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor: '#363642',
        fontFamily: 'poppins-mid',
        width: '100%',
        height: '100%',
      },
      button: {
        backgroundColor: 'white', 
        padding: 10,
        borderRadius: 5,
        width: 300,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        bottom: 50,
      },
      buttonText: {
        color: 'black', 
        fontSize: 20,
        fontFamily: 'poppins-bold',
      }

});