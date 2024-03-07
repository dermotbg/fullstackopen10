import { Picker } from "@react-native-picker/picker";
import theme from "../../../../../theme";

const RepositorySortPicker = ({ sort, setSort }) => {

  return(
    <Picker
      selectedValue={sort}
      onValueChange={(value) => setSort(value)}
      style={{ backgroundColor: theme.colors.secondary }}
    >
      <Picker.Item label="Latest repositories" value={'latest'}/> 
      <Picker.Item label="Highest rated repositories" value={'highest'}/> 
      <Picker.Item label="Lowest rated repositories" value={'lowest'}/> 
    </Picker>
  )
};

export default RepositorySortPicker