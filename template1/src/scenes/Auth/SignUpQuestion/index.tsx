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


export const ScreenSignUpQuestion = ({ route, navigation }) => {
    const [firstQuestion,setFirstQuestion] = useState(true)
    const [secondQuestion,setSecondQuestion] = useState(false)
    const [thirdQuestion,setThirdQuestion] = useState(false)
    const [fourthQuestion,setFourthQuestion] = useState(false)
    const [dropdownVisaValue,setDropdownVisaValue] = useState('Select visa')
    const [dropdownHourValue,setDropdownHourValue] = useState('Select hours')

    const options = [
        { label: "Yes", value: true },
        { label: "No", value: false }
    ];
    const optionsControllQuestion = [
      { label: "Yes, continue", value: true },
      { label: "No, can’t apply for job", value: false }
  ];

    const firstQuestionHandler = (value) => {
      console.log(value)
      value ? setFirstQuestion(true) : setFirstQuestion(false)
    }
    const secondQuestionHandler = (value) => {
      value ? setSecondQuestion(true) : setSecondQuestion(false)
    }
    const thirdQuestionHandler = (value) => {
      value ? setThirdQuestion(true) : setThirdQuestion(false)
    }
    const fourthQuestionHandler = (value) => {
      value ? setFourthQuestion(true) : setFourthQuestion(false)
    }

    return(
       <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        // style={{flex: 1}}
       >
         <ModalDropdown options={["option 1", "option 2"]} />
            <View style={[scenes.contentContainer]}>
              <View style={{justifyContent: 'space-between'}}>
                <View style={{paddingBottom: layout.paddings.default2}}>
                  <Text style={{...fonts.size22}}>Are you an Australian citizen or permanent resident?</Text>
                  <View style={{marginTop: layout.paddings.thick}}>
                    <SwitchSelector
                      options={options}
                      initial={firstQuestion ? 0 : 1}
                      onPress={value => firstQuestionHandler(value)}
                      backgroundColor={colors.gray.darker4}
                      buttonColor={colors.white}
                      buttonMargin={2}
                      borderRadius={4}
                      fontSize={13}
                      selectedTextStyle={{
                        ...fonts.size13,
                      }}
                      textStyle={{
                        ...fonts.size13,
                        color: colors.gray.lighter1
                      
                      }}
                    />
                  </View>
                </View>
                {!firstQuestion && <View style={styles.containerQuestion}>
                  <Text style={{...fonts.size22}}>Type of visa you have in Australia?</Text>
                  <View style={{marginTop: layout.paddings.thick}}>
                    <ModalDropdown
                      onSelect={(idx, value) => {
                        // setDuration({ id: idx + 1, value });
                        setDropdownVisaValue(value)
                        console.log(value)
                      }}
                      options={['Eledronic Travel Authority (subdass 601 )',
                      'eVisitor (subclass 651 )',
                      'Transit visa (subclass 771)',
                      'Visitor (subclass 600)',
                      'Work and Holiday visa (subclass 462)',
                      'Working Holiday visa (subclass 417)']}
                      defaultValue={'Select an item'}
                      animated={true}
                      style={{
                        paddingVertical: layout.paddings.thin,
                        paddingHorizontal: layout.paddings.default,
                        backgroundColor: colors.gray.darker4
                      }}
                      textStyle={{ ...fonts.size15, color: colors.gray.default }}
                      dropdownStyle={{
                        top: 20,
                        position: 'absolute',
                        marginTop: 13,
                        marginLeft: -16,
                        borderRadius: 0,
                        width: width-normalized(60),
                        // zIndex:0,
                        // height: normalized(20)
                      }}
                      dropdownTextHighlightStyle={{ ...fonts.bold }}
                      dropdownTextStyle={{ ...fonts.size14, marginLeft: normalized(10) }}
                      // showsVerticalScrollIndicator={false}
                    >
                      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                      <Text style={{...fonts.size15}}>{dropdownVisaValue}</Text>
                      <View style={{height: normalized(20), borderLeftWidth: normalized(1),borderLeftColor: colors.gray.default, width:normalized(40), alignItems: "center",justifyContent: 'center'}}>
                        <View style={{paddingLeft: normalized(10)}}>
                          <Icon name='Arrow'/>
                        </View>
                      </View>
                      </View>
                    </ModalDropdown>
                  </View>
                </View>}
                {!firstQuestion && <View style={styles.containerQuestion}>
                  <Text style={{...fonts.size22}}>Are you allowed to work in Australia?</Text>
                  <View style={{marginTop: layout.paddings.thick}}>
                    <SwitchSelector
                      options={options}
                      initial={secondQuestion ? 0 : 1}
                      onPress={value => secondQuestionHandler(value)}
                      backgroundColor={colors.gray.darker4}
                      buttonColor={colors.white}
                      buttonMargin={2}
                      borderRadius={4}
                      fontSize={13}
                      selectedTextStyle={{
                        ...fonts.size13,
                      }}
                      textStyle={{
                        ...fonts.size13,
                        color: colors.gray.lighter1
                      
                      }}
                    />
                  </View>
                </View>}
                {!firstQuestion && <View style={styles.containerQuestion}>
                  <Text style={{...fonts.size22}}>Do you have any restriction to work in Australia?</Text>
                  <View style={{marginTop: layout.paddings.thick}}>
                    <SwitchSelector
                      options={options}
                      initial={thirdQuestion ? 0 : 1}
                      onPress={value => thirdQuestionHandler(value)}
                      backgroundColor={colors.gray.darker4}
                      buttonColor={colors.white}
                      buttonMargin={2}
                      borderRadius={4}
                      fontSize={13}
                      selectedTextStyle={{
                        ...fonts.size13,
                      }}
                      textStyle={{
                        ...fonts.size13,
                        color: colors.gray.lighter1
                      
                      }}
                    />
                  </View>
                  {thirdQuestion && <View style={{marginTop: layout.paddings.thick}}>
                    <View style={{marginBottom: layout.paddings.narrow}}>
                      <Text style={{...fonts.size14, color: colors.gray.default}}>Hours allowed to work</Text>
                    </View>
                    <ModalDropdown
                      onSelect={(idx, value) => {
                        // setDuration({ id: idx + 1, value });
                        setDropdownHourValue(value)
                      }}
                      options={['10',
                      '20',
                      '30',
                      '40',
                      '50',
                      '60']}
                      defaultValue={'Select an item'}
                      animated={true}
                      style={{
                        paddingVertical: layout.paddings.thin,
                        paddingHorizontal: layout.paddings.default,
                        backgroundColor: colors.gray.darker4
                      }}
                      textStyle={{ ...fonts.size15, color: colors.gray.default }}
                      dropdownStyle={{
                        top: 20,
                        position: 'absolute',
                        marginTop: 13,
                        marginLeft: -16,
                        borderRadius: 0,
                        width: width-normalized(60),
                        // height: normalized(20)
                      }}
                      dropdownTextHighlightStyle={{ ...fonts.bold }}
                      dropdownTextStyle={{ ...fonts.size14, marginLeft: normalized(10) }}
                      // showsVerticalScrollIndicator={false}
                    >
                      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                      <Text style={{...fonts.size15}}>{dropdownHourValue}</Text>
                      <View style={{height: normalized(20), borderLeftWidth: normalized(1),borderLeftColor: colors.gray.default, width:normalized(40), alignItems: "center",justifyContent: 'center'}}>
                        <View style={{paddingLeft: normalized(10)}}>
                          <Icon name='Arrow'/>
                        </View>
                      </View>
                      </View>
                    </ModalDropdown>
                  </View>}
                </View>}
                {!firstQuestion && <View style={styles.containerQuestion}>
                  <Text style={{...fonts.size22}}>Would you allow Busyhive to run a Vevo for you?</Text>
                  <View style={{marginTop: layout.paddings.thick}}>
                    <SwitchSelector
                      options={optionsControllQuestion}
                      initial={fourthQuestion ? 0 : 1}
                      onPress={value => fourthQuestionHandler(value)}
                      backgroundColor={colors.gray.darker4}
                      buttonColor={colors.white}
                      buttonMargin={2}
                      borderRadius={4}
                      fontSize={13}
                      selectedTextStyle={{
                        ...fonts.size13,
                      }}
                      textStyle={{
                        ...fonts.size13,
                        color: colors.gray.lighter1
                      
                      }}
                    />
                  </View>
                  {!fourthQuestion && <View style={{flexDirection: 'row', paddingTop: layout.paddings.thin}}>
                    <Icon name='WarningMark'/>
                    <View style={{width: normalized(5)}}></View>
                    <Text>Sorry, you can’t work on BusyHive, but you can proceed as a job poster.</Text>
                    </View>}
                </View>}
              
            
                <Button disabled={firstQuestion || fourthQuestion ? false : true} onPress={()=> navigation.navigate('SignUpPassport')} title={'Confirm'} margin={layout.paddings.double}/>
              </View>
            </View>
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