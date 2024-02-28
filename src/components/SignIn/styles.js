import { StyleSheet } from 'react-native'
import theme from '../../theme';


export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  evenPadding: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
});