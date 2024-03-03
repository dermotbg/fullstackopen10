
import { Button, Linking } from "react-native";
import theme from "../../../theme";

const RepositoryLink = ({ url }) => {

  return (
    <Button
    title="Open in Github"
    color={theme.colors.primary}
    onPress={() => Linking.openURL(url)}
    />
      
  )
}

export default RepositoryLink;