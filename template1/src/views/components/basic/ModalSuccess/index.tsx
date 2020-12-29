import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import { colors, fonts, layout } from '../../../../assets/styles';
import { Button, Icon } from '../../basic';

export const ModalSuccess = (
  visible,
  onPressClose,
) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        onPressClose()
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Icon name="Checkmark Success" width="150" height="150" />
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subTitle}>{props.subtitle}</Text>
          <Button
            onPress={() => {
              // setModalVisible(!modalVisible);
              props.buttonAction();
            }}
            title="Go To Active"
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  title: {
    ...fonts.size36,
    ...fonts.bold,
    color: colors.black.default,
    marginBottom: layout.margins.thin,
  },
  subTitle: {
    ...fonts.size16,
    color: colors.gray.default,
    ...fonts.medium,
    textAlign: 'center',
    marginBottom: layout.margins.normal,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: layout.margins.double,
    paddingBottom: layout.paddings.double * 2,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
