import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Text from "../Text";
import { Link } from "react-router-native";

const AppBarTab = ({ styles, title, route }) => {
  return(
    <>
      <Pressable style={styles.children} >
      <Link to={route}> 
        <Text style={styles.text}>{title}</Text>
      </Link>
      </Pressable>
    </>
  )
}

export default AppBarTab;