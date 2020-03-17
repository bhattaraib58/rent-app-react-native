import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import styles from './styles';

/**
 * Create Custom Input Data Field.
 *
 * @param {*} Props {
 *   setInputData,
 *   placeholderName,
 *   keyboardType = "default",
 *   secureTextEntry = false,
 *   style = {}.
 * }.
 * @returns
 */
function CustomTextInput({
  setInputData,
  placeholderName,
  keyboardType = 'default',
  secureTextEntry = false,
  style = {}
}) {
  const [value, onChangeText] = useState();
  const [inputStyle, setInputStyle] = useState(styles.blurStyle);

  const onFocus = () => {
    setInputStyle(styles.foucsStyle);
  };

  const onBlur = () => {
    setInputStyle(styles.blurStyle);
  };

  const setData = text => {
    onChangeText(text);
    setInputData(text);
  };

  return (
    <TextInput
      style={[styles.container, inputStyle, style]}
      onChangeText={text => setData(text)}
      value={value}
      placeholder={'Enter Your ' + placeholderName}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

CustomTextInput.propTypes = {
  setInputData: PropTypes.func.isRequired,
  placeholderName: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.object
};

export default CustomTextInput;
