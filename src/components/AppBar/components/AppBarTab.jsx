import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Text from "../../Text";
import { Link } from "react-router-native";

const AppBarTab = ({ styles, title, route, pFunc }) => {

  return(
    <>
      <Pressable style={styles.children} >
        <Link to={route} onPress={pFunc ? () => pFunc() : undefined}> 
          <Text style={styles.text}>{title}</Text>
        </Link>
      </Pressable>
    </>
  )
}

export default AppBarTab;