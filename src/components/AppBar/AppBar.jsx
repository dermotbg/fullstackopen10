import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

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
      <AppBarTab styles={styles} title={'Repositories'}/>
    </View>
  );
};

export default AppBar;