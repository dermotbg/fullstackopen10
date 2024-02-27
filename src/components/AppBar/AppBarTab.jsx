import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Text from "../Text";

const AppBarTab = ({ styles, title }) => {
  return(
    <>
      <Pressable style={styles.children} >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </>
  )
}

export default AppBarTab;