import { Image, Text, View } from 'react-native'


const RepositoryItemBody = ({ styles, item }) => {

  return(
    <View style={[styles.listItem.row, styles.forceWrap]}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
      <View style={styles.listItem.column}>
        <Text style={styles.titleText}>{item.fullName}</Text>
        <Text style={[styles.descriptionText]} >{item.description}</Text>
        <View style={styles.language}> 
          <Text style={styles.language.text} >
            {item.language} 
          </Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItemBody;