import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MenuScreen = () => {
  const menuItems = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text>{item.title}</Text>
    </View>
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
});

export default MenuScreen;