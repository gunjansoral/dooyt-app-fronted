import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../../context/ThemeContext';
import CategoryList from '../../../components/CategoryList';

const DescribeYourBusiness = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const handleRegisterNowPress = () => {
    Linking.openURL('https://www.dooyt.com');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/chevron_big_left.png')} />
        </TouchableOpacity>

        <View style={styles.mid}>
          <Text style={styles.title(theme)}>Select Category</Text>
          <Text style={styles.subTitle(theme)}>
            Select your business category
          </Text>
          <CategoryList />
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.registerText(theme)}>
          <Text style={styles.linkText} onPress={handleRegisterNowPress}>
            Register now
          </Text>
          {' '}to start using Dooyt App.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DescribeYourBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 14,
    width: '100%',
    justifyContent: 'space-between',
  },
  top: {
    gap: 10,
  },
  mid: {
    gap: 15,
  },
  backButton: {
    marginBottom: 20,
  },
  title: (theme) => ({
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  }),
  subTitle: (theme) => ({
    color: theme.colors.textSecondary,
    fontWeight: '400',
    fontSize: 16,
  }),
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: (theme) => ({
    color: theme.colors.textPrimary,
    fontSize: 14,
    textAlign: 'center',
  }),
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
