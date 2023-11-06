import React, { useState, useCallback } from 'react'
import { StyleSheet, Image, Text, View, Button, Modal, TextInput } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { useEffect } from 'react';


export default function Equat1Task() {

    // Axios (Endpoint)

    const [risin1, setRisin1] = useState(null);
    const [risin2, setRisin2] = useState(null);
    // const [equation, setEquation] = useState(null);
    // const [results, setResults] = useState(null)


    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try{
        const response = await axios.get('http://192.168.8.190:8000/api/quadratic-results/')
        const data = response.data;

        setRisin1(data.risin1);
        setRisin2(data.risin2);
        // setEquation(data.equation);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const navigation = useNavigation();

    const [isLoaded] = useFonts({
        "poppins-mid": require("../assets/fonts/Poppins-Black.ttf"),
        "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "poppins-italic": require("../assets/fonts/Poppins-Italic.ttf"),
    })

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };


    
    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
          await SplashScreen.hideAsync(); 
        }
      }, [isLoaded]);
    
      if (!isLoaded) {
        return null;
      }
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.equation}>
                {/* {equation} */}
            </Text>
            <Text style={styles.risin1}>
              {risin1}
            </Text>
            <View
              style={styles.diskContainer}
            >
              <Text style={styles.diskLabel}>Input the correct discriminant</Text>
              <TextInput
                placeholderTextColor="#fff" 
                style={styles.diskInput}
                placeholder='Discriminant'>

              </TextInput>
            </View>
            <View 
              style={styles.rootContainer}
            >
              <Text style={styles.rootLabel}>Input the roots of this equation</Text>
              <TextInput
                placeholderTextColor="#fff" 
                style={styles.rootInput}
                placeholder='x1'>

              </TextInput>
              <TextInput
                placeholderTextColor="#fff" 
                style={styles.rootInput}
                placeholder='x2'>

              </TextInput>

            </View>




            {/* End */}
            <TouchableOpacity style={styles.submitBtn} onPress={toggleModal}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.paragraph}>You've correctly completed this exercise.</Text>
                    <Text style={styles.paragraph}>You've earned 0.05 BotCoin.</Text>
                    

                    <Button style={styles.homeBtn} title="Return to the menu" 
                    onPress={() => {
                        navigation.navigate("SearchMenu")
                    }} />
                </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor: '#363642',
        fontFamily: 'poppins-mid',
        width: '100%',
        height: '100%',
      },
      equation: {
        marginTop: 50,
        color: "white"
      },
      submitBtn: {
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        width: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        fontFamily: 'poppins-bold',
        fontSize: 40,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        fontFamily: 'poppins-mid',
        fontSize: 20,
      },
      BotCoinImg: {
        width: 80,
        height: 80,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        padding: 20,
      },
      homeBtn: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "white",
      },
      paragraph: {
        fontSize: 20,
        width: '80%',
      },
      risin1: {
        color: 'white',
        fontSize: 50
      },
      rootContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      rootLabel: {
        fontSize: 30,
        width: '90%',
        flexWrap: 'wrap',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'poppins-bold',
        color: '#FF5733',
      },  
      rootInput: {
        fontFamily: 'poppins-bold',
        textAlign: 'center',
        borderWidth: 1,
        width: 120,
        height: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        margin: 15,
        color: 'white',
        fontSize: 20,
      },
      diskContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      diskLabel: {
        fontSize: 30,
        width: '90%',
        flexWrap: 'wrap',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'poppins-bold',
        color: '#FF5733',
      },  
      diskInput: {
        fontFamily: 'poppins-bold',
        textAlign: 'center',
        borderWidth: 1,
        width: 120,
        height: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        margin: 15,
        color: 'white',
        fontSize: 20,
      },
});