import React from 'react';
import { ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { FormHelperText } from '@material-ui/core';
export default ({ name }) => {
    const { t } = useTranslation();
    return (<ErrorMessage name={name} render={(translationString) => (<FormHelperText error={true}>{t(translationString)}</FormHelperText>)}/>);
};
//# sourceMappingURL=FieldError.js.map