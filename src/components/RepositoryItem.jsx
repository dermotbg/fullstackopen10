import { Text, StyleSheet } from 'react-native'

const RepositoryItem = ({ item }) => {

    const styles = StyleSheet.create({
        baseText: {
          fontFamily: 'Cochin',
        },
        titleText: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'red'
        },
      });

    console.log(item);

    return(
        <>
            {/* {item.ownerAvatarUrl} */}
            <Text style={styles.titleText}>Full Name: {item.item.fullName}</Text>
            <Text>Description: {item.item.description}</Text>
            <Text>Language: {item.item.language} </Text>
            <Text>Stars: {item.item.stargazersCount} </Text>
            <Text>Forks: {item.item.forksCount} </Text>
            <Text>Reviews: {item.item.reviewCount} </Text>
            <Text>Rating: {item.item.ratingAverage} </Text>
        </>
    )

}

export default RepositoryItem