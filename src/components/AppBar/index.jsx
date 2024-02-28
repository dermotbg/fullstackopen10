import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './components/AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    flexGap: 1,
    backgroundColor: theme.appBar.backgroundColor,
  },
  children: {
    paddingTop: 25,
    paddingLeft: 15, 
    paddingBottom: 15, 
  },
  text: {
    color: theme.appBar.textColor,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab styles={styles} title={'Repositories'} route={''}/>
        <AppBarTab styles={styles} title={'Sign In'} route={'/signin'}/>
      </ScrollView>
    </View>
  );
};

export default AppBar;