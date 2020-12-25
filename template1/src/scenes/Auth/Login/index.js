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
import {colors, fonts, scenes} from '../../../assets/styles';
import { normalized } from '../../../utils';
import {
  authentication,
  validationRegex,
  animations,
} from '../../../assets/configs';

export const ScreenLogin = ({ route, navigation }) => {
  const [phoneChecked, setPhoneChecked] = React.useState(false);
  const [unvalidatedMessages, setUnvalidatedMessages] = React.useState({});
  const numberInput = React.useRef()

  const focusInputWithKeyboard = () => {
    InteractionManager.runAfterInteractions(() => {
      numberInput.current.focus()
    });
  } 

  React.useEffect(() => {
    focusInputWithKeyboard()
  }, [])

  return(
      <View style={scenes.contentContainer}>
        <View style={{}}>
        <Text style={{...fonts.size24, ...fonts.bold}}>Login</Text>
        {/* <TouchableOpacity onPress={() => {navigation.navigate('Verification')}}>
          <Text>
            Continue
          </Text>
        </TouchableOpacity> */}
        <Text style={[{...fonts.size15},{lineHeight: normalized(25)}]}>Whether you’re creating an account or signing back in, let’s start with your number</Text>
        <View style={{ marginTop: normalized(46)}}>
          {/* Phone number */}
          <Input
            ref={numberInput}
            type="Telephone number"
            placeholder={'Phone Number'}
            iconsLeft={{ Phone: null }}
            autoCompleteType="tel"
            keyboardType="phone-pad"
            maxLength={12}
            textContentType="telephoneNumber"
            identifier="phone"
            // config={{ onCountryCodeChanged }}
            // formData={formData}
            regex={validationRegex.telephoneNumber}
            //
            onValidate={setPhoneChecked}
            //
            iconsRight={phoneChecked && { 'Check': null }}
            errorMessage={unvalidatedMessages.phone}
          />
        </View>
        <Button title='Continue'/>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={{color:colors.gray.default}}>Don’t have an account? </Text>
          <Text style={{color: colors.orange.default}} onPress={()=> Linking.openURL('#')}>Sign up</Text>
        </View>
        </View>
      </View>
    )
}