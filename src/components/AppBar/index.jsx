import { View, ScrollView } from 'react-native';
import { styles } from './styles'
import AppBarTab from './components/AppBarTab';
import useUser from '../hooks/useUser';
import useSignOut from '../hooks/useSignOut';


const AppBar = () => {
  const getUser = useUser();
  const { signOut } = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab styles={styles} title={'Repositories'} route={''}/>
        {getUser.data?.me === null
          ? <AppBarTab styles={styles} title={'Sign In'} route={'/signin'}/>
          : <>
              <AppBarTab styles={styles} title={'Create Review'} route={'/createReview'} />
              <AppBarTab styles={styles} title={'Sign Out'} route={'/signin'} pFunc={signOut} />
            </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;