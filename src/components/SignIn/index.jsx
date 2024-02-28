import { Button, View, TextInput, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { styles } from './styles'
import theme from '../../theme';

const initialValues = {
  username: '',
  password: ''
};

const onSubmit = (values) => {
  console.log(values);
};


const SignIn = () => {

  const formik = useFormik({
    initialValues,
    onSubmit
  });

  

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
      />
      <Button
        color={theme.colors.primary}
        title={'Sign In'}
        onPress={() => onSubmit(formik.values)}
      />
    </View>
  ) 
};

export default SignIn;