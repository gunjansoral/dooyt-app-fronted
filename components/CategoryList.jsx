import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SelectButton from './buttons/SelectButton'; // Ensure this path is correct
import { SafeAreaView } from 'react-native';

const CategoryList = () => {
  const categories = [
    { id: '0', title: "Food & Beverage", onPress: () => console.log("Food & Beverage tapped") },
    { id: '1', title: "Fashion & Lifestyle", onPress: () => console.log("Fashion & Lifestyle tapped") },
    { id: '2', title: "Spa & Salon", onPress: () => console.log("Spa & Salon tapped") },
    { id: '3', title: "Stores & Groceries", onPress: () => console.log("Stores & Groceries tapped") },
    { id: '4', title: "Health & Medical", onPress: () => console.log("Health & Medical tapped") },
    { id: '5', title: "Others", onPress: () => console.log("Others tapped") }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SelectButton title={item.title} onPress={item.onPress} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        // Ensuring the list is fully stretched to available width
        contentContainerStyle={{ alignItems: 'stretch' }}  // Remove if SelectButton is meant to be full width
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 20,
    // Removed alignItems and justifyContent to allow default stretch behavior
    width: '100%'  // Ensure the container takes full width
  },
  separator: {
    height: 5,
    backgroundColor: "#f0f0f0",
    width: '100%',  // Ensuring separator is full-width for consistency
    alignSelf: 'center'
  }
});

export default CategoryList;
