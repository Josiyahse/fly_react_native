import * as React from "react";
import { Appbar } from "react-native-paper";

const CustomAppBar = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="FLY" />
    {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
    {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
  </Appbar.Header>
);

export default CustomAppBar;
