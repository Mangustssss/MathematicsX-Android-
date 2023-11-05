import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const MenuScreen = () => {

  const navigation = useNavigation();

  const handleMenuItemPress = (itemID) => {
      navigation.navigate('Equation1Theory')
  }

  const menuItems = [
    { id: '1', image: require('../assets/equation1.png') },
    { id: '2', image: require('../assets/equation1.png') },
    { id: '3', image: require('../assets/equation1.png') },
    { id: '4', image: require('../assets/equation1.png') },
    { id: '5', image: require('../assets/equation1.png') },
    { id: '6', image: require('../assets/equation1.png') },
    { id: '7', image: require('../assets/equation1.png') },
    { id: '8', image: require('../assets/equation1.png') },
    { id: '9', image: require('../assets/equation1.png') },
    { id: '10', image: require('../assets/equation1.png') },
    { id: '11', image: require('../assets/equation1.png') },
    { id: '12', image: require('../assets/equation1.png') },
  ];


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleMenuItemPress(item.id)}>
      <View style={styles.menuItem}>
        <Image source={item.image} style={StyleSheet.menuItemImage} />
      </View>
    </TouchableOpacity>
    
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
  },
  menuItem: {
    flex: 0.3,
    padding: 20,
    height: 120,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'lightgray',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 20
  },
  menuItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default MenuScreen;