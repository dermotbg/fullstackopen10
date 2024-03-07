import { TextInput } from "react-native";
import { styles } from "../styles";


const RepositorySearchBar = ({ setSort, filter, setFilter }) => {

  return <TextInput 
    style={styles.input}
    placeholder="Filter Repositories"
    value={filter}
    onChangeText={(value) => {
      setSort('filter')
      setFilter(value)
    }
    }/>
};

export default RepositorySearchBar;