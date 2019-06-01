import React, { FunctionComponentElement } from 'react';
import { ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { FormHelperText } from '@material-ui/core';

type Props = {
  name: string;
};

export default ({ name }: Props): FunctionComponentElement<Props> => {
  const { t } = useTranslation();
  return (
    <ErrorMessage
      name={name}
      render={(translationString: string) => (
        <FormHelperText error={true}>{t(translationString)}</FormHelperText>
      )}
    />
  );
};
