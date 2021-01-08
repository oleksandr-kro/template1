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

// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {CameraOptions, ImageLibraryOptions, Callback} from './types';
// import * as ImagePicker from '../';
// import ImagePicker from 'react-native-image-picker';

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

  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


  const cameraLaunch = () => {

    ImagePicker.launchCamera(
      {
      mediaType: "photo",
      includeBase64: false,
      saveToPhotos: false,
    }, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));
      }
    });
}

  const changePhoto = () => {
    
    launchCamera(
      {
        mediaType: "photo",
        includeBase64: false,
        saveToPhotos: false,
      },
      (response) => {
        console.log(response)
        setImage(response);
      }
    );
  };

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }
  const uploadPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
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
                <TouchableOpacity onPress={showDatepicker}>
                  <View style={{paddingVertical: layout.paddings.thin,
                    paddingHorizontal: layout.paddings.default,
                    backgroundColor: colors.gray.darker4}}>
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
            <View>

              
            </View>
            {/* --------------------- */}
              <TouchableOpacity onPress={()=> takePhoto()}>
                <View>
                  <Text> Take Photo </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> uploadPhoto()}>
                <View>
                  <Text> upload Photo </Text>
                </View>
              </TouchableOpacity>
              {/* <Button onPress={()=> changePhoto()} title={'Photo'}/> */}
              

            {/* --------------------- */}
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

