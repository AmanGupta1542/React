import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
const SignUp = () => {
    const validate = Yup.object({
        firstName : Yup.string()
            .max(15, 'Must be 15 character or less')
            .required('First name is Required'),
        lastName : Yup.string()
            .max(15, 'Must be 15 character or less')
            .required('Last name is Required'),
        email : Yup.string()
            .email('Email is invalid')
            .required('Email is Required'),
        password : Yup.string()
            .min(6, 'Must be 6 character or more')
            .required('Password Required'),
        confirmPassword : Yup.string()
            .oneOf([Yup.ref('password'),null], 'Passwords should be same')
            .required('Confirm Password is Required')
    });
    return (
        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}    
            validationSchema = {validate}
            onSubmit = {values => {
                console.log(values);
            }}
        >
            {formik => (
                <div>
                    <h1>Signup Form</h1>
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <button className='btn btn-primary mt-4' type='submit'>Submit</button> 
                        <button className='btn btn-info mt-4 ms-3' type='reset'>Reset</button> 
                    </Form>
                </div>
            )}
        </Formik>
    );
}

export default SignUp;