import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../util/styles";

const ErrorMessage = styled.span`
  position: absolute;
  bottom: 0.3rem;
  left: 2rem;
  color: ${colors.red};
  font-weight: 700;
  font-size: 1.2rem;
`;

const ErrorIcon = styled(FontAwesomeIcon).attrs({
  icon: "exclamation-triangle"
})`
  padding-right: 0.5rem;
`;

const FormError = ({ error }) => {
  if (!error) return null;

  return (
    <ErrorMessage>
      <ErrorIcon />
      <FormattedMessage id={error} defaultMessage={error} />
    </ErrorMessage>
  );
};

export default FormError;