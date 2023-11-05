import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import SearchMenu from './SearchMenu/searchmenu';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
import { useFonts } from 'expo-font';



export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SearchMenu" component={SearchMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363642',
    fontFamily: 'Poppins',
  },
  logo: {
    height: 300
  }
});
