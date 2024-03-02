import { StyleSheet } from 'react-native'
import theme from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  listItem: {
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      
    },
    column: {
      display: 'flex',
      flexFlow: 'column-wrap'
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-evenly',
    }
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: theme.colors.textSecondary,
    flexWrap: 'wrap',
    flexShrink: 1,
    
  },
  forceWrap: {
    maxWidth: '75%'
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 15,
    borderRadius: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingTop: 3,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 3,
    text: {
      color: theme.colors.white
    }
  },
  evenPadding: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  }
});