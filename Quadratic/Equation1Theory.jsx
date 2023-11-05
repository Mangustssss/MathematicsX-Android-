import React, { useState, useCallback } from 'react'
import { StyleSheet, Image, Text, View, Button } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Equation1Theory() {

    const navigation = useNavigation();

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
          
          
            <View style={styles.imageContainer}>
              <Image 
                style={styles.equationImage}
                source={require("../assets/equation1.png")}
              />  
            </View>
            <Text style={styles.header}>
                The Quadratic Formula
            </Text>
            <Text style={styles.paragraph}>
            Quadratic equations are used in many real-life situations such as calculating 
            the areas of an enclosed space, 
            the speed of an object, the profit and loss of a product, or curving 
            a piece of equipment for designing
            </Text>
            
            {/* <TouchableOpacity 
              style={styles.button}
              onPress={() => {
                  navigation.navigate('SearchMenu')
              }}
            >
              <Text style={styles.buttonText}>Train now</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SearchMenu')
              }}
              style={styles.MainBtn}

            >
              <Text
                style={styles.buttonText}
              >Train now</Text>
            </TouchableOpacity>



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
      header: {
        flex: 1,
        fontSize: 40,
        fontFamily: 'poppins-bold',
        textAlign: 'center',
        color: '#FF5733',
      },
      paragraph: {
        flex: 2,
        fontSize: 20,
        fontFamily: 'poppins-bold',
        color: '#FFF',
        width: '80%',
        textAlign: 'center',
        top: '10%'

      },
      MainBtn: {
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
      },
      imageContainer: {
        top: '30%',
        width: '70%',
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      },
});