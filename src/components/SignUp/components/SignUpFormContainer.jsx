import { Button, Text, TextInput, View } from "react-native";

import { useFormik } from 'formik';
import * as yup from 'yup';
import { styles } from "../styles";
import theme from "../../../theme";

const initialValues = {
  username: '',
  password: '',
  confPassword: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(30, 'Username cannot be more that 30 characters long'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long')
    .max(50, 'Password cannot be more than 50 characters long'),
  confPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirmation is required')
});

const SignUpFormContainer = ({ onSubmit }) => {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        testID='usernameInput'
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
          <Text style={{ color: 'red',}}>{formik.errors.username}</Text>
        )}
      <TextInput
        style={styles.input}
        testID='passwordInput'
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
      />
        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: 'red', }}>{formik.errors.password}</Text>
        )}
      <TextInput
        style={styles.input}
        testID='confPasswordInput'
        placeholder='Confirm Password'
        value={formik.values.confPassword}
        onChangeText={formik.handleChange('confPassword')}
        secureTextEntry
      />
        {formik.touched.confPassword && formik.errors.confPassword && (
          <Text style={{ color: 'red', }}>{formik.errors.confPassword}</Text>
        )}
      <Button
        testID='submitButton'
        color={theme.colors.primary}
        title={'Sign In'}
        onPress={formik.handleSubmit}
      />
    </View>
  )

};
export default SignUpFormContainer;