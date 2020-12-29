import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Appointment from "../../../../assets/images/Appointment.svg";
import Check from "../../../../assets/images/Check.svg";
import Verification from "../../../../assets/images/Verification.svg";
import CheckMark from "../../../../assets/images/CheckMark.svg";
import JobSeeker from "../../../../assets/images/JobSeeker.svg";
import JobPoster from "../../../../assets/images/JobPoster.svg";

import { colors, layout } from "../../../../assets/styles";

const styles = StyleSheet.create({
  bubbleIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bubbleIcon: {
    position: "absolute",
    width: layout.icons.bubble,
    height: layout.icons.bubble,
    borderRadius: layout.icons.bubble / 2,
    backgroundColor: colors.green.default,
  },
});

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case "Appointment":
      return <Appointment {...props} />;
    case "Check":
      return <Check {...props} />;
    case "Verification":
      return <Verification {...props} />;
    case "CheckMark":
      return <CheckMark {...props} />;
    case "JobSeeker":
      return <JobSeeker {...props} />;
    case "JobPoster":
      return <JobPoster {...props} />;
    default:
      return null;
  }
};

export const TouchableIcon = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.33}>
    <Icon
      name={name}
      width={layout.icons.default}
      height={layout.icons.default}
    />
  </TouchableOpacity>
);
