import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';
import Spacer from '../components/Spacer';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  age: Yup.number().required('Required'),
  secret: Yup.string(),
});

interface FormikScreenProps {}

const FormikScreen: React.FC<FormikScreenProps> = () => {
  const [submittedValues, setSubmittedValues] = React.useState('');

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        age: '',
        secret: '',
      }}
      onSubmit={values => {
        setSubmittedValues(JSON.stringify(values));
      }}
      validationSchema={validationSchema}>
      {({handleSubmit, values, handleBlur, handleChange, touched, errors}) => {
        return (
          <View style={styles.container}>
            <Input
              placeholder="Enter your name"
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              error={
                touched.firstName && errors.firstName
                  ? errors.firstName
                  : undefined
              }
            />
            <Spacer type="medium" />
            <Input
              placeholder="Enter your last name"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              error={
                touched.lastName && errors.lastName
                  ? errors.lastName
                  : undefined
              }
            />
            <Spacer type="medium" />
            <Input
              placeholder="Enter your age"
              value={values.age}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              keyboardType="number-pad"
              error={touched.age && errors.age ? errors.age : undefined}
            />
            <Spacer type="medium" />
            <Input
              placeholder="Enter your secret"
              value={values.secret}
              onChangeText={handleChange('secret')}
              onBlur={handleBlur('secret')}
              secureTextEntry
              error={
                touched.secret && errors.secret ? errors.secret : undefined
              }
            />

            <Spacer type="medium" />
            <Button title="Submit it" onPress={handleSubmit} />

            <View style={styles.submittedValues}>
              <Text style={styles.submittedValuesText}>
                {submittedValues && 'Submitted values:'}
              </Text>
              <Text style={styles.submittedValuesText}>{submittedValues}</Text>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  submittedValues: {
    marginTop: 35,
  },
  submittedValuesText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FormikScreen;
