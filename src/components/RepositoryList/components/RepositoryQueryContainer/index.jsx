import { View } from "react-native";
import RepositorySearchBar from "./components/RepositorySearchBar";
import RepositorySortPicker from "./components/RepositorySortPicker";
import { styles } from "./styles";

const RepositoryQueryContainer = ({ sort, setSort, filter, setFilter }) => {

  return (
    <View style={styles.background}>
      <RepositorySortPicker sort={sort} setSort={setSort} />
      <RepositorySearchBar filter={filter} setFilter={setFilter} setSort={setSort}/>
    </View>
  )
};

export default RepositoryQueryContainer;