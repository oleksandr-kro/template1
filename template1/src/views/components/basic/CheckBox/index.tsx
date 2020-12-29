import React from 'react'
// import Icon from 'react-native-vector-icons/MaterialIcons'
import {Icon} from '../../basic'


import { Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { normalized } from '../../../../utils';
import {
    colors,
    fonts,
    layout,
    scenes,
    shadow,
    block,
  } from "../../../../assets/styles";


export const CheckBox = ({ image, selected, onPress, style, textStyle, size = 30, color = '#211f30', text = '', boxSize= 24, ...props}) => (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
        <View style={[styles.container, {borderColor: selected ? colors.orange.darker2 : colors.gray.darker2,}]}>
            <View style={{flexDirection:'row', alignItems:'center', margin: normalized(12)}}>
                <Icon
                    // size={size}
                    // color={color}
                    name={image}
                    style={{marginRight: 10}}
                /> 
                <Text style={{...fonts.size16}}> {text} </Text>
            </View>
            {selected ?
            <View style={{backgroundColor: colors.black.darker1, width: normalized(boxSize), height: normalized(boxSize), borderRadius: 4, margin: 4, marginRight: normalized(20), borderWidth: normalized(1), borderColor: colors.black.darker1, justifyContent:'center', alignItems: 'center'}}>
                <Icon
                // size={size}
                // color={color}
                name={ 'CheckMark'}
                // style={{marginRight: 10}}
                /> 
            </View>
       :     
            <View style={{backgroundColor: colors.white, width: normalized(boxSize), height: normalized(boxSize), borderRadius: 4, margin: 4, marginRight: normalized(20), borderWidth: normalized(1), borderColor: colors.black.darker1}} />}

            
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: layout.paddings.default,
    },
    container: {
        alignItems: 'center',
        flexDirection:'row',
        borderWidth: normalized(2),
        borderRadius: normalized(8),
        width: '100%',
        justifyContent:'space-between',
    },
})