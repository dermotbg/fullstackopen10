import { StyleSheet } from 'react-native'
import theme from "../../../../theme";


export const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 8,
    // borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: 'white'
  },
  background: {
    backgroundColor: theme.colors.secondary,
    color:'white',
  }
});