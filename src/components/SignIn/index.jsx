import { Button, View, TextInput, Text } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { styles } from './styles'
import theme from '../../theme';

import useSignIn from '../hooks/useSignIn';


const initialValues = {
  username: 'kalle',
  password: 'password'
};



const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),
  password: yup
    .string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters long'),
});


const SignIn = () => {

  const login = useSignIn()
  
  const onSubmit = async (values) => {
    const { data } = await login.signIn(values)
    console.log(data.authenticate.accessToken)
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
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
      {formik.touched.username && formik.errors.username && (
          <Text style={{ color: 'red',}}>{formik.errors.username}</Text>
        )}
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
      />
        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: 'red', }}>{formik.errors.password}</Text>
        )}
      <Button
        color={theme.colors.primary}
        title={'Sign In'}
        onPress={formik.handleSubmit}
      />
    </View>
  ) 
};

export default SignIn;