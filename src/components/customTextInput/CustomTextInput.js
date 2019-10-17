import React, {useState} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';
import styles from './styles';

/**
 * Create Custom Input Data Field
 *
 * @param {*} {
 *   setInputData,
 *   placeholderName,
 *   keyboardType = "default",
 *   secureTextEntry = false,
 *   style = {}
 * }
 * @returns
 */
const CustomTextInput = ({
  setInputData,
  placeholderName,
  keyboardType = 'default',
  secureTextEntry = false,
  style = {},
}) => {
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
};

export default CustomTextInput;
