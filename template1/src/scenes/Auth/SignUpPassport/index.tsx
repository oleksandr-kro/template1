import React, {useState} from 'react';
import {
  Animated,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  InteractionManager, 
  TextInput,
  Linking,
  ScrollView,
  StyleSheet,
} from 'react-native';

import SwitchSelector from "react-native-switch-selector";
import ModalDropdown from 'react-native-modal-dropdown-with-flatlist';
import { Button , Icon} from '../../../views/components/basic';
import {colors, fonts, scenes, layout} from '../../../assets/styles';
import { normalized, width } from '../../../utils';
import { color } from 'react-native-reanimated';


export const ScreenSignUpPassport = ({ route, navigation }) => {


    return(
        <ScrollView
         showsVerticalScrollIndicator={false}
         bounces={false}
         style={{}}
        >
          <ModalDropdown options={["option 1", "option 2"]} />
          
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  containerQuestion: {
    paddingTop: layout.paddings.default,
    paddingBottom: layout.paddings.default2,
    borderTopWidth: normalized(1),
    borderTopColor: colors.gray.darker4
  },
});