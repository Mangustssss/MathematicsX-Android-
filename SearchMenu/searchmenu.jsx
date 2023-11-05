import React, { useState, useCallback } from 'react'
import { StyleSheet, Image, Text, View, Button } from 'react-native'
// import { SearchBar } from 'react-native-elements'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SearchBar } from 'react-native-elements';
import MenuScreen from '../Components/MenuScreen';

SplashScreen.preventAutoHideAsync();

// const appText = () => {
//     const [titleText] = useState("Training")
// };

export default function SearchMenu() {
    const [isLoaded] = useFonts({
        "poppins-mid": require("../assets/fonts/Poppins-Black.ttf"),
        "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "poppins-italic": require("../assets/fonts/Poppins-Italic.ttf"),
    })
    
    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
          await SplashScreen.hideAsync(); //hide the splashscreen
        }
      }, [isLoaded]);
    
      if (!isLoaded) {
        return null;
      }

   
    
    return(
        <View style={styles.container} onLayout={handleOnLayout}>
            <Text style={styles.header} >
                Training
            </Text>
            <View style={styles.searchcontianer}>
                <SearchBar 
                    style={styles.searchbar}
                    placeholder='Search for equations'
                    onChangeText={this.updateSearch}
                    round='true'
                />
                <MenuScreen />
            </View>

        </View>
        );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#363642'
    },
    header: {
        flex: 1,
        fontSize: 40,
        fontFamily: 'poppins-mid',
        top: 60,
        alignItems: 'flex-start',
        color: '#FF5733',
    },
    searchcontianer: {
        width: '100%',
        height: '80%'

    },
    searchbar: {
        backgroundColor: 'transparent'
    }


  
  });
  