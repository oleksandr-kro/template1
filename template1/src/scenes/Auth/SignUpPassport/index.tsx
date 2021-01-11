import React, {useState} from 'react';
import {
  Animated,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  InteractionManager, 
  TextInput,
  Linking,
  ScrollView,
  StyleSheet,
  Platform,
  AppRegistry,
  NativeModules,
} from 'react-native';


import ImagePicker from 'react-native-image-crop-picker';

import ModalDropdown from 'react-native-modal-dropdown-with-flatlist';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Button , Icon, Modal} from '../../../views/components/basic';
import {colors, fonts, scenes, layout} from '../../../assets/styles';
import { normalized, width } from '../../../utils';
import { color } from 'react-native-reanimated';


export const ScreenSignUpPassport = ({ route, navigation }) => {
  const [dropdownType,setDropdownType] = useState('Select...')
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showModalReg, setShowModalReg] = useState(false);
  const [confirmButton, setConfirmButton] = useState(false);


  const takePhoto = () => {
    
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      hideModal()
    });
    
  }
  const uploadPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      hideModal()
    });
    
  }
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      console.log(selectedDate)
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(!show);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };

    const showModalF = () => {
      setShowModal(true)
    }

    const hideModal = () => {
      setShowModal(false)
    }

    const showModalRegF = () => {
      setShowModalReg(true)
    }

    const hideModalReg = () => {
      setShowModalReg(false)
    }



  const Comp = () => {
    return(<TouchableHighlight>
      <View style={{paddingVertical: layout.paddings.thin,
        paddingHorizontal: layout.paddings.default,
        backgroundColor: colors.gray.darker4}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{width: width - normalized(125)}}>
            <Text style={{...fonts.size15}}>{dropdownType}</Text>
          </View>
          <View style={{height: normalized(20), borderLeftWidth: normalized(1),borderLeftColor: colors.gray.default, width:normalized(40), alignItems: "center",justifyContent: 'center'}}>
            <View style={{paddingLeft: normalized(10)}}>
              <Icon name='Arrow'/>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>)
  }

    return(
        <ScrollView
         showsVerticalScrollIndicator={false}
         bounces={false}
         style={{backgroundColor: colors.white}}
        >
          <View style= {scenes.contentContainer}>
            <View>
              <Text style={{...fonts.size24}}>ID type or Passport</Text>
            </View>
            <View style={{marginTop: layout.paddings.default}}>
              <View>
                <Text style={{...fonts.size16}}>What ID type do you want to use?</Text>
              </View>
              <View style={{marginTop: layout.paddings.narrow}}>
                <ModalDropdown
                  onSelect={(idx, value) => {
                    // setDuration({ id: idx + 1, value });
                    setDropdownType(value)
                    console.log(value)
                  }}
                  options={['Australian photo ID',
                  'Australian Driving licence',
                  'Passport']}
                  defaultValue={'Select an item'}
                  animated={true}
                  style={{
                    paddingVertical: layout.paddings.thin,
                    paddingHorizontal: layout.paddings.default,
                    backgroundColor: colors.gray.darker4,
                    borderRadius: normalized(4),
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
                    <View style={{width: width - normalized(125)}}>
                      <Text style={{...fonts.size15}}>{dropdownType}</Text>
                    </View>
                  <View style={{height: normalized(20), borderLeftWidth: normalized(1),borderLeftColor: colors.gray.default, width:normalized(40), alignItems: "center",justifyContent: 'center'}}>
                    <View style={{paddingLeft: normalized(10)}}>
                      <Icon name='Arrow'/>
                    </View>
                  </View>
                  </View>
                </ModalDropdown>
              </View>
            </View>
            <View style={{marginTop: layout.paddings.default}}>
              <View>
                <Text style={{...fonts.size16}}>Expiration Date</Text>
              </View>
              <View style={{marginTop: layout.paddings.narrow}}>
                <TouchableOpacity onPress={showDatepicker} style={{marginBottom: layout.paddings.default}}>
                  <View style={{paddingVertical: layout.paddings.thin,
                    paddingHorizontal: layout.paddings.default,
                    borderRadius: normalized(4),
                    backgroundColor: colors.gray.darker4,}}>
                      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                      <View style={{width: width - normalized(125)}}>
                        <Text style={{...fonts.size15}}>{moment(date).format("DD/MM/YYYY")}</Text>
                      </View>
                      <View style={{height: normalized(20), borderLeftWidth: normalized(1),borderLeftColor: colors.gray.default, width:normalized(40), alignItems: "center",justifyContent: 'center'}}>
                        <View style={{paddingLeft: normalized(10)}}>
                          <Icon name='Arrow'/>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  minimumDate={new Date()}
                  mode={mode}
                  is24Hour={true}
                  display="spinner"
                  onChange={onChange}
                />
              )}
                
              </View>
            </View>
            <TouchableOpacity onPress={()=>showModalF()} style={{marginVertical: layout.paddings.default}}>
              <View style ={styles.imageContainer}>
                <View style={{alignItems: 'center'}}>
                  <Icon name='Camera'/>
                  <View style={{marginBottom:layout.paddings.default, marginTop:layout.paddings.default}}>
                    <Text style={{...fonts.size15, color:colors.gray.lighter1,fontFamily:'Roboto'}}>Take a photo or upload</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <Text style={{...fonts.size24}}>Upload selfie</Text>
            <TouchableOpacity onPress={()=>showModalF()} style={{marginVertical: layout.paddings.default}}>
              <View style ={styles.imageContainer}>
                <View style={{alignItems: 'center'}}>
                  <Icon name='Camera'/>
                  <View style={{marginBottom:layout.paddings.default, marginTop:layout.paddings.default}}>
                    <Text style={{...fonts.size15, color:colors.gray.lighter1, fontFamily:'Roboto'}}>Take a photo or upload</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <Button disabled={confirmButton} onPress={()=> showModalRegF()} title={'Continue'} margin={layout.paddings.default}/>
          </View>
            <Modal
            visible={showModal}
            onRequestClose={hideModal}
            >
              <View style={{flex:1, justifyContent:'space-between'}}>
                <View>
                  <Text style={{...fonts.size16}}>Choose</Text>
                  <Button margin={layout.paddings.default} onPress={()=> takePhoto()} title={'Take Photo'}/>
                  <Button margin={layout.paddings.default} onPress={()=> uploadPhoto()} title={'Upload Photo'}/>
                </View>
                <Button onPress={()=> hideModal()} title={'Cancel'}/>
              </View>
            </Modal>
            <Modal
            visible={showModalReg}
            onRequestClose={hideModalReg}
            >
              <View style={{flex:1, justifyContent:'space-between', paddingBottom: layout.paddings.default}}>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.modalItemContainer}>
                    <Icon name='VerificationEnd'/>
                  </View>
                  <View style={styles.modalItemContainer}>
                    <Text style={{...fonts.size24}}>ID verification sent</Text>
                  </View>
                  <View style={styles.modalItemContainer}>
                    <Text style={{...fonts.size15, textAlign:'center'}}>Your ID will be verified by the admin and after that you will be allowed to work on busy hive. Meanwhile you can post a job on busy hive.</Text>
                  </View>
                </View>
                <Button onPress={()=> hideModalReg()} title={'Continue'}/>
              </View>
            </Modal>
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
  imageContainer: {
    backgroundColor: colors.gray.darker5,
    borderColor: colors.gray.default,
    borderWidth: normalized(1),
    borderRadius: normalized(8),
    borderStyle: 'dashed',
    height: normalized(208),
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalItemContainer:{
    paddingTop: layout.paddings.default
  }
});

