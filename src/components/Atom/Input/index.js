import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  placeholder,
}) => {
  const [border, setBorder] = useState('#7D8797');
  const onFocusForm = () => {
    setBorder('#1D2A64');
  };
  const onBlurForm = () => {
    setBorder('#7D8797');
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        placeholder={placeholder}
      />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),

  label: {
    fontSize: 16,
    color: '#7D8797',
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
