import React from 'react';
import Button from '../../atoms/Button';
import LabeledDesign from '../../molecules/LabeledInput';

const FormField = () => (
  <form>
    <LabeledDesign label="Your name: " />
    <LabeledDesign label="Your address: " />
    <LabeledDesign label="Your Phone Number: " />
    <LabeledDesign label="Your SSN: " />
    <Button onClick={() => {}} />
  </form>
);

FormField.defaultProps = {
};

FormField.propTypes = {

};

export default FormField;
