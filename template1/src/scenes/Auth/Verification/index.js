import React from 'react';
import {
  Animated,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Icon} from '../../../views/components/basic/Icon';
import CodeInput from 'react-native-code-input';

import {colors, fonts, scenes, layout} from '../../../assets/styles';
import { color } from 'react-native-reanimated';
import { normalized,height } from '../../../utils';


export const ScreenVerification = ({ route, navigation}) => {
  const codeInput = React.useRef()


  const defaultHeaderConfig = (navigation) => ({
  //  light: true,
  //  transparent: true,
  //  headerCenter: <Text>Buy Now</Text>,
  //  headerLeft: {
  //    top: (
  //      <TouchableOpacity onPress={() => navigation.goBack()}>
  //      <Icon name="Check"  />
  //      </TouchableOpacity> 
  //    ),
  //  },
    title: '123456'
  }); 
  React.useLayoutEffect(() => {
    // navigation.setOptions({
    //   ...defaultHeaderConfig(navigation),
    // });
    navigation.setOptions({
      title: '',

      headerStyle: {
        backgroundColor: 'transparent',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0, elevation: 0,
        shadowColor: 'transparent',
        // zIndex: 0,
        
      },
    // headerTitle: (props) => (
    //   <Text
    //     {...props}
    //     style={{ fontWeight: 'bold'}}>
    //     Custom Title1
    //   </Text>
    // ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{marginLeft: 30}}>
          {/* <Text style={{}}>Left Menu</Text> */}
          <Icon name={'ArrowBack'}/>
        </TouchableOpacity>
      ),
      // headerRight: () => (
      //   <TouchableOpacity
      //     onPress={() => alert('Right Menu Clicked')}
      //     style={{marginRight: 10}}>
      //     <Text style={{}}>Right Menu</Text>
      //   </TouchableOpacity>
      // ),
    });
  }, [navigation]);

  const authHandler = (code) =>{
    if(code === code){
      return navigation.navigate('SignUp')
    }
  };
  
    return(
      <ScrollView showsVerticalScrollIndicator={false}
      bounces={false} style={{backgroundColor: '#fff'}}>
      {/* <KeyboardAvoidingView style={{height: (height - normalized(45))}}> */}
      {/* <View style={{flex: 1, marginTop: normalized(20)}}> */}
      <KeyboardAvoidingView>
      <View style={[scenes.contentContainer]}>
        <View style={{alignItems: 'center'}}>
          <View style={{}}>
            <Icon name={'Verification'}/>
          </View>
          <Text style={{...fonts.size24, paddingTop: layout.paddings.double}}>Verification</Text>
          <View style={{flexDirection:'row', justifyContent:'center', marginTop: layout.paddings.thin}}>
            <Text style={{...fonts.size15}}>Please enter the 4-digit confirmation code, sent to 000000.   
              <TouchableOpacity style={{marginTop: normalized(-2)}}>
                <Text style={{...fonts.size15, color: colors.orange.default, textDecorationLine: 'underline'}}> Resend code</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={{marginVertical: layout.paddings.double}}>
            <CodeInput
                activeColor= {colors.black.default}
                inactiveColor='#828282'
                autoFocus={true}
                borderType= 'clear'

                inputPosition='center'
                size={50}
                codeLength={4}
                onFulfill={(code) => {
                    authHandler(code)
                }}
                containerStyle={{ marginTop: 0 }}
                codeInputStyle={{ backgroundColor: colors.gray.darker5 , paddingVertical: layout.paddings.default, height: normalized(80), width:normalized(60), ...fonts.size24}}
            />
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
      {/* </View> */}
      </ScrollView>
    )
}

