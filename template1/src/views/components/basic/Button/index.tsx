import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors, fonts } from '../../../../assets/styles';

import { s, vs, ms, mvs } from 'react-native-size-matters';

export const Button = ({onPress, margin, title, light, disabled, style, ...props }) => {
 return(
   <LinearGradient colors={[colors.orange.gradient, colors.orange.gradient1]} style={{borderRadius: s(5), marginTop: margin, opacity: disabled ? 0.6 : 1}}>
    <Pressable onPress={onPress} disabled={disabled} style={[{ width: '100%',  alignItems: 'center', justifyContent: 'center'},{height: vs(55)}]}>
      <Text style={{...fonts.size15}}>{title}</Text>
    </Pressable>
   </LinearGradient>
 )
};
