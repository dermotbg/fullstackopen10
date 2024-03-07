import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import RepositoryList from './RepositoryList/index.jsx';
import SingleRepository from './SingleRepository/index.jsx';
import CreateReview from './CreateReview/index.jsx';
import SignUp from './SignUp/index.jsx';
import UserReviews from './UserReviews/index.jsx';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/:repoId' element={<SingleRepository />}/>
        <Route path='/createReview' element={<CreateReview />}/>
        <Route path='/myreviews' element={<UserReviews />}/>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      
    </View>
  );
};

export default Main;