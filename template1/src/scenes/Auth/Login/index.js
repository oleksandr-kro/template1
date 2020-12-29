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
        <Text style={[{...fonts.size15},{lineHeight: normalized(25), paddingTop: layout.paddings.thin}]}>Whether you’re creating an account or signing back in, let’s start with your number</Text>
        <View style={{ marginTop: layout.paddings.double}}>
          {/* Phone number */}
          <Text style={{...fonts.size14, color: colors.gray.default}}>Phone number</Text>
          <Input
            style={{marginTop: layout.paddings.thin}}
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
        <Button title='Continue' margin={layout.paddings.thick} onPress={()=> navigation.navigate('Verification')}/>
        <View style={{flexDirection:'row', justifyContent:'center', marginTop: layout.paddings.thick}}>
          <Text style={{color:colors.gray.default}}>Don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={{color: colors.orange.default, textDecorationLine: 'underline'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
}