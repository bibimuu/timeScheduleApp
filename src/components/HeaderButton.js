import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import Colors from "../constants/Colors";

const CustomHeaderButton = props => {
  return (
    <HeaderButton
    {...props} 
    color="Colors.blue"
    />
  );
};

export {CustomHeaderButton};