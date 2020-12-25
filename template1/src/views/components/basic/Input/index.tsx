import React from 'react';
import {
  Animated,
  Easing,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';

import { animations, authentication } from '../../../../assets/configs';
import { colors, fonts, layout } from '../../../../assets/styles';
import { Icon } from '../Icon';
import { normalized, transparentColor } from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: normalized(335),
    paddingHorizontal: layout.paddings.default,
    paddingVertical: layout.paddings.inputVertical,
    borderWidth: layout.border.line,
    borderRadius: layout.radius.thin,
    borderColor: colors.gray.darker5,
    backgroundColor: colors.gray.darker5,
  },

  input: {
    flex: 1,
    padding: 0,
    marginHorizontal: layout.margins.narrow,
    ...fonts.size14,
    ...fonts.medium,
    lineHeight: null,
    color: colors.gray.darker5,
  },

  inputVerificationCode: {
    width: fonts.size24.fontSize,
    marginHorizontal: layout.margins.thin,
    ...fonts.size24,
    ...fonts.bold,
    lineHeight: null,
    color: colors.gray.darker,
  },

  focused: {
    borderColor: colors.gray.darker5,
    color: colors.gray.darker,
  },

  messageContainer: {
    width: '100%',
    left: 0,
    position: 'absolute',
    alignSelf: 'flex-start',
    zIndex: 1,
  },

  messageShape: {
    position: 'absolute',
    bottom: -layout.margins.narrow,
    paddingVertical: layout.paddings.narrow,
    paddingHorizontal: layout.paddings.thin,
    borderTopLeftRadius: layout.radius.narrow,
    borderTopRightRadius: layout.radius.narrow,
    borderBottomRightRadius: layout.radius.narrow,
    backgroundColor: colors.green.default,
  },

  message: {
    ...fonts.size14,
    ...fonts.medium,
    lineHeight: null,
    color: colors.white,
  },

  // eslint-disable-next-line react-native/no-color-literals
  arrow: {
    position: 'absolute',
    bottom: -layout.paddings.narrow,
    borderLeftWidth: layout.paddings.narrow,
    borderRightWidth: layout.paddings.narrow,
    borderTopWidth: layout.paddings.narrow,
    borderTopColor: colors.green.default,
    borderColor: 'transparent',
  },
});

export const Input = React.forwardRef(
  (
    {
      type,
      style,
      styleActive,
      inputStyle,
      inputStyleActive,
      placeholder,
      placeholderTextColor,
      defaultValue,
      identifier,
      formData,
      errorMessage,
      iconsLeft,
      iconsRight,
      regex,
      config,
      onValidate,
      onBlur,
      onFocus,
      onChangeText,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState(defaultValue);
    const [focused, setFocused] = React.useState(false);
    const [message, setMessage] = React.useState(null);

    const translateX = React.useRef(new Animated.Value(0)).current;
    const messageOpacity = React.useRef(new Animated.Value(0)).current;
    const messageTranslateX = translateX.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -8, 0, 8, 0, -8, 0],
    });

    //
    const hideMessage = () =>
      Animated.timing(messageOpacity, {
        toValue: 0,
        duration: animations.duration.short,
        useNativeDriver: true,
      }).start(() => setMessage(null));

    const renderIcons = (icons = {}, iconStyle) =>
      Object.entries(icons).map(([name, onPress]) => (
        <TouchableOpacity
          key={name}
          disabled={!onPress}
          onPress={onPress}
          style={iconStyle}
        >
          <Icon
            name={name}
            width={layout.icons.default}
            height={layout.icons.default}
          />
        </TouchableOpacity>
      ));

    //
    React.useLayoutEffect(() => {
      const delay = Math.random() * animations.duration.default;

      if (errorMessage) {
        setMessage(errorMessage);
        translateX.setValue(0);

        Animated.parallel([
          Animated.timing(messageOpacity, {
            toValue: 1,
            duration: animations.duration.short,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(translateX, {
            toValue: 3,
            duration: animations.duration.default,
            delay,
            ease: Easing.bounce,
            useNativeDriver: true,
          }),
        ]).start();
      } else if (message) {
        hideMessage();
      }
    }, [errorMessage]);

    return (
      <View
        style={[
          styles.container,
          style,
          focused && [styles.focused, styleActive],
        ]}
      >
        {/* Unvalidated message */}
        {Boolean(message) && (
          <Animated.View
            style={[
              styles.messageContainer,
              {
                transform: [{ translateX: messageTranslateX }],
                opacity: messageOpacity,
              },
            ]}
          >
            <View style={styles.messageShape}>
              <Text numberOfLines={3} style={styles.message}>
                {message}
              </Text>
              <View style={styles.arrow} />
            </View>
          </Animated.View>
        )}

        {/* Icons on the left */}
        {renderIcons(iconsLeft, { marginRight: layout.margins.thin })}

        {type === 'Telephone number' &&
          (() => {
            const {
              countryCode = authentication.defaultCountryCode,
              onCountryCodeChanged,
            } = config || {};

            const [currentCountryCode, setCurrentCountryCode] = React.useState(
              countryCode,
            );

            return (
              <>
              <CountryPicker
                countryCode={currentCountryCode}
                withCallingCodeButton
                withFlagButton={false}
                withCloseButton={false}
                preferredCountries={__DEV__ ? ['UA'] : ['SA']}
                withFilter={false}
                withCallingCode
                theme={{
                  // onBackgroundTextColor: colors.green.default,
                  onBackgroundTextColor: '#000',
                  ...fonts.size14,
                  ...fonts.medium,
                  itemHeight: normalized(48),
                }}
                containerButtonStyle={{
                  paddingBottom: Platform.select({
                    ios: 0,
                    android: normalized(2.5),
                  }),
                }}
                //
                onSelect={({ callingCode: [code], cca2 }) => {
                  setCurrentCountryCode(cca2);
                  if (onCountryCodeChanged) onCountryCodeChanged(code, cca2);
                }}
              />
              <View style={{height: normalized(20), width: 1, backgroundColor: colors.gray.default5, marginHorizontal: layout.margins.default}}/>
              </>
            );
          })()}

        {/* Input component */}
        {(() => {
          switch (type) {
            case 'Verification code':
              return (() => {
                const { codeLength: length, groupLength } = config || {};

                const codeObject = React.useRef(
                  Array.from({ length })
                    .fill(null)
                    .map(() => ({ ref: React.createRef(), value: '' })),
                ).current;

                return codeObject.map((item, index) => (
                  <View key={index} style={{ flexDirection: 'row' }}>
                    <TextInput
                      ref={item.ref}
                      defaultValue={item.value}
                      maxLength={1}
                      placeholder="×"
                      placeholderTextColor={colors.gray.lighter2}
                      style={styles.inputVerificationCode}
                      textAlign="center"
                      autoCompleteType="off"
                      keyboardType="numeric"
                      selectTextOnFocus
                      //
                      onKeyPress={
                        //
                        ({ nativeEvent }) =>
                          nativeEvent.key === 'Backspace' &&
                          index > 0 &&
                          codeObject[index - 1].ref.current.focus()
                      }
                      onChangeText={
                        //
                        // eslint-disable-next-line no-return-assign
                        (text) => (
                          (codeObject[index].value = text),
                          text.length &&
                            index + 1 < length &&
                            codeObject[index + 1].ref.current.focus(),
                          onChangeText &&
                            onChangeText(
                              codeObject
                                .map((current) => current.value)
                                .join(''),
                            ),
                          message && hideMessage()
                        )
                      }
                    />

                    {/* Code groups separator */}
                    {index % groupLength === groupLength - 1 &&
                      index < length - groupLength && (
                        <Text
                          style={[
                            styles.inputVerificationCode,
                            { color: colors.gray.lighter2 },
                          ]}
                        >
                          —
                        </Text>
                      )}
                  </View>
                ));
              })();

            default:
              return (
                <TextInput
                  style={[
                    styles.input,
                    focused && styles.focused,
                    inputStyle,
                    focused && inputStyleActive,
                  ]}
                  placeholder={placeholder}
                  placeholderTextColor={
                    focused
                      ? transparentColor(
                          inputStyleActive?.color ||
                            inputStyle?.color ||
                            styles.focused.color,
                          33,
                        )
                      : placeholderTextColor || colors.gray.accent1
                  }
                  disableFullscreenUI
                  //
                  onBlur={() => (setFocused(false), onBlur && onBlur())}
                  onFocus={() => (setFocused(true), onFocus && onFocus())}
                  onChangeText={(text) => (
                    setValue(text),
                    onChangeText && onChangeText(text),
                    identifier &&
                      formData &&
                      (() => {
                        // eslint-disable-next-line no-param-reassign
                        formData[identifier] = text;
                      })(),
                    regex &&
                      onValidate &&
                      onValidate(Boolean(text.match(regex))),
                    message && hideMessage()
                  )}
                  //
                  ref={ref}
                  value={value}
                  {...props}
                />
              );
          }
        })()}

        {/* Icons on the right */}
        {renderIcons(iconsRight, { marginLeft: layout.margins.thin })}
      </View>
    );
  },
);
