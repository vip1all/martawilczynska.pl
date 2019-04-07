import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { colors, query } from '../../util/styles';
import ClinicBackground from '../../components/Containers/ClinicBackground';
import SideBySide, { Left } from '../../components/Containers/SideBySide';
import useNavSetBackground from '../../components/Nav/useNavSetBackground';
import ContactForm from '../../components/Contact/ContactForm';
import { SideBySideLadyImage } from '../../components/OpenEyesLadyImage';
import Info from './Info';
import { SectionHeading, SubHeading } from '../../components/Headings';
import ScrollDownIcon from '../../components/ScrollDownIcon';

const InfoContainer = styled.div`
  position: relative;
  padding: 10rem 1.5rem 10rem;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: stretch;
  padding: 10rem 0 10rem 0;
  width: 100%;

  ${query.md`
    flex-flow: row nowrap;
    align-items: center;
  `}
`;

const Separator = styled.div`
  flex: 0 0 1px;
  background: ${colors.white};
  height: 1px;
  margin: 2rem 0;

  ${query.md`
    margin: 0 2rem;
    height: 150px;
    width: 1px;
  `}
`;

const FormContainer = styled(SideBySide)``;

const FormWrapper = styled(Left)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;

  ${query.lg`
    padding-left: 5rem;
  `}

  ${query.xl`
    padding-left: 10rem;
  `}
`;

const Contact = () => {
  const navSetBackground = useNavSetBackground();
  useEffect(() => {
    navSetBackground(false);
  }, [navSetBackground]);

  return (
    <ClinicBackground>
      <InfoContainer>
        <InfoWrapper>
          <Info
            name="Marta Wilczyńska-Staniul"
            phone="+48 501 531 926"
            email="martawilczynska.pl@gmail.com"
            textAlign="right"
            arrowText={<FormattedMessage id="contact.ask-question" />}
            position="top"
          />
          <Separator />
          <Info
            name="KCM Clinic"
            phone="+48 71 75 00 636"
            arrowText={<FormattedMessage id="contact.make-an-appointment" />}
            position="bottom"
          />
        </InfoWrapper>
        <ScrollDownIcon />
      </InfoContainer>
      <FormContainer>
        <FormWrapper>
          <SectionHeading color="white" style={{ padding: '0 1rem' }} center={true}>
            <FormattedMessage id="contact.form.header" />
            <SubHeading color="silver">
              <FormattedMessage id="contact.form.subheader" />
            </SubHeading>
          </SectionHeading>
          <ContactForm />
        </FormWrapper>
        <SideBySideLadyImage />
      </FormContainer>
    </ClinicBackground>
  );
};

export default Contact;
