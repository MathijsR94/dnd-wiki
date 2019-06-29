import React, { ReactNode, FunctionComponentElement } from "react";
import { Formik, Field, Form, FieldProps } from "formik";
import { Mutation, MutationFunc } from "react-apollo";
import gql from "graphql-tag";
import { FormGroup, Button, TextField } from "@material-ui/core";
import * as Yup from "yup";
import FieldError from "../shared/FieldError";
import { withTranslation, WithTranslation } from "react-i18next";
import { withRouter, RouteComponentProps } from "react-router";
import { campaignsQuery } from "../nav/CampaignList";
import { ApolloCache } from "apollo-cache";

export const ROLES = {
  Player: "PLAYER",
  Admin: "ADMIN"
};

const createCampaignMutation = gql`
  mutation createCampaignMutation($data: CampaignCreateWithoutDmInput!) {
    createCampaign(data: $data) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

interface Values {
  name: string;
}

const CreateCampaignSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "forms.minLength")
    .required("forms.required")
});

type Props = WithTranslation & RouteComponentProps & {};

const CreateCampaignForm = ({
  t,
  history
}: Props): FunctionComponentElement<Props> => (
  <Mutation
    mutation={createCampaignMutation}
    update={(cache: any, { data: { createCampaign } }: any) => {
      const { user } = cache.readQuery({ query: campaignsQuery });
      cache.writeQuery({
        query: campaignsQuery,
        data: {
          user: {
            ...user,
            campaigns: user.campaigns.concat([createCampaign])
          }
        }
      });
    }}
  >
    {(createCampaign: MutationFunc<Values, {}>): ReactNode => (
      <Formik
        initialValues={{ name: "" }}
        onSubmit={({ name }, actions) => {
          createCampaign({ variables: { data: { name } } })
            .then(() => {
              actions.setSubmitting(false);
              actions.resetForm();
            })
            .catch(() => {
              actions.setSubmitting(false);
            });
        }}
        validationSchema={CreateCampaignSchema}
        render={() => {
          return (
            <Form>
              <Field
                name="name"
                render={({ field }: FieldProps<Values>) => (
                  <FormGroup>
                    <TextField
                      {...field}
                      placeholder={t("forms.placeholder.name")}
                    />
                    <FieldError name="name" />
                  </FormGroup>
                )}
              />
              <Button type="submit">{t("campaign.createButton")}</Button>
            </Form>
          );
        }}
      />
    )}
  </Mutation>
);

const CreateCampaignFormWithRouter = withRouter(CreateCampaignForm);
export default withTranslation()(CreateCampaignFormWithRouter);
