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
} from 'react-native';
import { Button , Input} from '../../../views/components/basic';
import {colors, fonts, scenes, layout} from '../../../assets/styles';
import { normalized } from '../../../utils';
import {
  authentication,
  validationRegex,
  animations,
} from '../../../assets/configs';

export const ScreenSignUp = ({ route, navigation }) => {
  const [firstNameChecked, setFirstNameChecked] = React.useState(false);
  const [lastNameChecked, setLastNameChecked] = React.useState(false);
  const [emailChecked, setEmailChecked] = React.useState(false);
  const [unvalidatedMessages, setUnvalidatedMessages] = React.useState({});

    const firstNameInput = React.useRef()
    const lastNameInput = React.useRef()
    const emailInput = React.useRef()

  return(
      <View style={scenes.contentContainer}>
          <Text style={{...fonts.size24}}>Set up your profile</Text>
          <View style={{marginTop: layout.paddings.double}}>
            <View>
              <Text style={{...fonts.size14, color: colors.gray.default}}>First Name</Text>
              <Input
                style={{marginTop: layout.paddings.thin}}
                ref={firstNameInput}
    

                placeholder={'First name'}
                iconsLeft={{ Phone: null }}
                autoCompleteType="tel"
                keyboardType="default"
                maxLength={12}
                textContentType="telephoneNumber"
                identifier="phone"
                // config={{ onCountryCodeChanged }}
                // formData={formData}
                regex={validationRegex.telephoneNumber}
                //
                onValidate={setFirstNameChecked}
                //
                iconsRight={firstNameChecked && { 'Check': null }}
                errorMessage={unvalidatedMessages.phone}
              />
            </View>
          </View>
          <View>
            <View style={{marginTop:layout.paddings.thick}}>
              <Text style={{...fonts.size14, color: colors.gray.default}}>Select your role</Text>
              <View style={{marginTop: layout.paddings.narrow}}>
                <Text stlye={{...fonts.size15}}>You may choose both roles and switch between them in the profile tab.</Text>
              </View>
            </View>
            <View></View>
          </View>
      </View>
    )
}