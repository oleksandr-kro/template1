import React from 'react';

import {
  Modal as DefaultModal,
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import { colors, layout, shadow } from '../../../../assets/styles';
import { normalized } from '../../../../utils';

const styles = StyleSheet.create({
  shading: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.black.default,
    opacity: 0.5,
    zIndex: 10,
  },

  content: {
    minHeight: '60%',
    maxHeight: '70%',
    padding: layout.paddings.thick,
    marginTop: 'auto',
    borderTopLeftRadius: layout.radius.default,
    borderTopRightRadius: layout.radius.default,
    backgroundColor: colors.white,
    // ...shadow.default,
  },

  fade: {
    // alignSelf: 'center',
    width: '100%',
    // height: normalized(495),
    borderRadius: layout.radius.thin,
  },
});

export const Modal = ({
  visible,
  onRequestClose = () => {},
  animationType = 'slide',
  style,
  children,
  ...props
}) => {
  const [animated, setAnimated] = React.useState(false);

  //
  React.useLayoutEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setAnimated(visible);
  }, [visible]);

  return (
    <>
      {/* Shading */}
      {animated && <View style={styles.shading} />}

      <DefaultModal
        visible={visible}
        onRequestClose={onRequestClose}
        animationType={animationType}
        presentationStyle="overFullScreen"
        statusBarTranslucent
        transparent
        {...props}
      >
        <TouchableOpacity
          style={{ ...StyleSheet.absoluteFill }}
          onPress={onRequestClose}
        />

        {/* Content */}
        <View
          style={[
            styles.content,
            animationType === 'fade' && styles.fade,
            style,
          ]}
        >
          {children}
        </View>
      </DefaultModal>
    </>
  );
};
