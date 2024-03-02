import { View } from 'react-native'
import RepositoryItemBody from './components/RepositoryItemBody';
import RepositoryItemStats from './components/RepositoryItemStats';
import { styles } from './styles';

const RepositoryItem = ({ item }) => {

      const numberCompactor = (value) => {
        if(value > 1000){
          if(value > 10000){
            return `${String(value)[0]}${String(value)[1]}.${String(value)[3]}k`;
          }
          return `${String(value)[0]}.${String(value)[1]}k`;
        }
        return value;
      };


    return(
        <View style={styles.container} testID="repositoryItem">
          <RepositoryItemBody styles={styles} item={item.item} />
          <RepositoryItemStats styles={styles} item={item.item} numberCompactor={numberCompactor} />
        </View>
    )
}

export default RepositoryItem