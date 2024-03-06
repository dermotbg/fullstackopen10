import * as yup from 'yup';


import { Button, Text, TextInput, View } from "react-native";
import { styles } from '../styles'
import theme from "../../../theme";
import { useFormik } from 'formik';
import { useState } from 'react';

const initialValues = {
  ownerName: '',
  rating: '',
  repositoryName: '',
  text: ''
};


const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owners username is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0).max(100),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  text: yup
    .string()
    .max(500)
})



const CreateReviewContainer = ({ onSubmit }) => {

  const [height, setHeight] = useState(42)

  const formik = useFormik({
    initialValues, 
    validationSchema,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        testID='repositoryOwner'
        placeholder='Repository owner name'
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
          <Text style={{ color: 'red',}}>{formik.errors.ownerName}</Text>
        )}
      <TextInput
        style={styles.input}
        testID='repositoryName'
        placeholder='Repository name'
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
      />
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <Text style={{ color: 'red', }}>{formik.errors.repositoryName}</Text>
        )}
      <TextInput
        style={styles.input}
        testID='rating'
        placeholder='Rating between 0-100'
        keyboardType='numeric'
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
      />
        {formik.touched.rating && formik.errors.rating && (
          <Text style={{ color: 'red', }}>{formik.errors.rating}</Text>
        )}
      <TextInput
        style={[styles.input, {height: height}]}
        testID='reviewText'
        placeholder='Review'
        multiline
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
        onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
      />
        {formik.touched.text && formik.errors.text && (
          <Text style={{ color: 'red', }}>{formik.errors.text}</Text>
        )}
      <Button
        testID='submitReviewButton'
        color={theme.colors.primary}
        title={'Submit Review'}
        onPress={formik.handleSubmit}
      />
    </View>
  )
};
export default CreateReviewContainer;