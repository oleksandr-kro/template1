import React from 'react';
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
} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Button , Input, CheckBox, Modal} from '../../../views/components/basic';
import {colors, fonts, scenes, layout} from '../../../assets/styles';
import { normalized } from '../../../utils';


export const ScreenSignUpQuestion = () => {
    const options = [
        { label: "01:00", value: "1" },
        { label: "02:00", value: "2" }
      ];

    return(
       <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
       >
            <View style={scenes.contentContainer}>
            <Text>123456</Text>
            <SwitchSelector
              options={options}
              initial={0}
              onPress={value => console.log(`Call onPress with value: ${value}`)}
            />
            <Button title={'Confirm'}/>
            </View>
       </ScrollView>
    )
}