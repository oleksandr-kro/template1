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
import { Button , Input, CheckBox, Modal} from '../../../views/components/basic';
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
  const [selectedFirst, setSelectedFirst] = React.useState(false);
  const [selectedSecond, setSelectedSecond] = React.useState(false);
  // const [visibleModal, setVisibleModal] = React.useState(false);


  const firstNameInput = React.useRef()
  const lastNameInput = React.useRef()
  const emailInput = React.useRef()

  const switchCheckBoxF = () => {
    setSelectedFirst(true)
    setSelectedSecond(false)
  } 
  const switchCheckBoxS = () => {
    setSelectedSecond(true)
    setSelectedFirst(false)
  } 
  const navigateTo = () => {
    if (selectedFirst && !selectedSecond){
      console.log('first')
      return navigation.navigate('SignUpQuestion')
    } else if (!selectedFirst && selectedSecond){
      console.log('second')
    } else {
      console.log('choose the section')
    }
  }
  // const onRequestClose = () => {
  //   setVisibleModal(false)
  // }

  return(
    <ScrollView 
    showsVerticalScrollIndicator={false}
    bounces={false}
    >
      <View style={scenes.contentContainer}>
          <Text style={{...fonts.size24}}>Set up your profile</Text>
          <View style={{marginTop: layout.paddings.double}}>
            <View>
              <Text style={{...fonts.size14, color: colors.gray.default}}>First Name</Text>
              <Input
                style={{marginTop: layout.paddings.thin}}
                ref={firstNameInput}
                placeholder={'First name'}
                keyboardType="default"
                maxLength={20}
              />
            </View>
            <View style={{marginTop: layout.paddings.default}}>
              <Text style={{...fonts.size14, color: colors.gray.default}}>Last Name</Text>
              <Input
                style={{marginTop: layout.paddings.thin}}
                ref={lastNameInput}
                placeholder={'Last name'}
                keyboardType="default"
                maxLength={20}
              />
            </View>
            <View style={{marginTop: layout.paddings.default}}>
              <Text style={{...fonts.size14, color: colors.gray.default}}>Email</Text>
              <Input
                style={{marginTop: layout.paddings.thin}}
                ref={emailInput}
                placeholder={'Email'}
                keyboardType="default"
                maxLength={20}
              />
            </View>
          </View>
          <View>
            <View style={{marginTop:layout.paddings.thick}}>
              <Text style={{...fonts.size14, color: colors.gray.default}}>Select your role</Text>
              <View style={{marginTop: layout.paddings.thin}}>
                <Text stlye={{...fonts.size15}}>You may choose both roles and switch between them in the profile tab.</Text>
              </View>
            </View>
            <View style={{marginTop: layout.paddings.narrow}}>
              <CheckBox selected={selectedFirst} text={'Job seeker'} image={'JobSeeker'} onPress={switchCheckBoxF}/>
              <CheckBox selected={selectedSecond} text={'Job poster'} image={'JobPoster'} onPress={switchCheckBoxS}/>
            </View>
          </View>
          <View>
            <Button title='Continue' margin={layout.paddings.thick} onPress={()=> navigateTo()}/>
          </View>
      </View>
      {/* <Modal visible={visibleModal} onRequestClose={onRequestClose}>
        <Text>1234656</Text>  
      </Modal> */}
      </ScrollView>
    )
}