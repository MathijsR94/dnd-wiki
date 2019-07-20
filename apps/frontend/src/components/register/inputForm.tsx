import React, { ReactNode } from 'react';
import { Formik, Field, Form, FieldProps } from 'formik';
import { Mutation, MutationFunc } from 'react-apollo';
import gql from 'graphql-tag';
import { FormGroup, Button, TextField } from '@material-ui/core';
import * as Yup from 'yup';
import FieldError from '../shared/FieldError';

export const ROLES = {
  Player: 'PLAYER',
  Admin: 'ADMIN'
};

const registerMutation = gql`
  mutation registerMutation($email: String!, $password: String!, $role: ROLE) {
    register(email: $email, password: $password, role: $role) {
      id
    }
  }
`;

interface Values {
  email: string;
  password: string;
  role: string;
}

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('forms.invalid.email')
    .required('forms.required'),
  password: Yup.string()
    .min(4, 'forms.minLength')
    .required('forms.required')
});

export default () => (
  <Mutation mutation={registerMutation}>
    {(register: MutationFunc<Values, {}>): ReactNode => (
      <Formik
        initialValues={{ email: '', password: '', role: ROLES.Player }}
        onSubmit={({ email, password, role }, actions) => {
          register({ variables: { email, password, role } });
          actions.setSubmitting(false);
        }}
        validationSchema={RegisterSchema}
        render={() => (
          <Form>
            <Field
              name="email"
              render={({ field }: FieldProps<Values>) => (
                <FormGroup>
                  <TextField {...field} placeholder="email" type="email" />
                  <FieldError name="email" />
                </FormGroup>
              )}
            />
            <Field
              name="password"
              render={({ field }: FieldProps<Values>) => (
                <FormGroup>
                  <TextField
                    {...field}
                    type="password"
                    placeholder="password"
                  />
                  <FieldError name="password" />
                </FormGroup>
              )}
            />
            <Button type="submit">Log in</Button>
          </Form>
        )}
      />
    )}
  </Mutation>
);