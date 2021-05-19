import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "react-native-elements";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import strings from "../../../res/strings";

import * as ActionCreators from "../../actions";
import AppScreenContainer from "../../library/components/appScreenContainer";

const ProfileScreen = ({
  navigation,
  logout,
  notificationsEnabled,
  switchDisabled,
  ...props
}) => {
  const [isEnabled, setEnabled] = useState(notificationsEnabled);
  const toggleSwitch = () => {
    isEnabled ? props.disableNotifications() : props.enableNotifications();
    setEnabled(!isEnabled);
  };

  useEffect(() => setEnabled(notificationsEnabled), [notificationsEnabled]);

  function onLogout() {
    logout();
  }

  return (
    <AppScreenContainer navigation={navigation} title="Profile">
      <View style={styles.container}>
        <View style={styles.switchNotifications}>
          <Text style={styles.notificationsText}>{strings.notifications}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#beddc4" }}
            thumbColor={notificationsEnabled ? "#3dcc57" : "#f4f3f4"}
            ios_backgroundColor="#5DC571"
            onValueChange={toggleSwitch}
            value={isEnabled}
            disabled={switchDisabled}
          />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>{strings.logout}</Text>
        </TouchableOpacity>
      </View>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
  },
  logoutButton: {
    marginHorizontal: 10,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
    borderRadius: 1,
    elevation: 1,
    paddingVertical: 5,
  },
  logoutText: {
    fontSize: 25,
  },
  switchNotifications: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 150,
  },
  notificationsText: {
    fontSize: 15,
    fontWeight: "900",
  },
});

function mapStateToProps({ notifications: { enabled, token } }) {
  return {
    notificationsEnabled: enabled,
    switchDisabled: token ? false : true,
  };
}

export default connect(mapStateToProps, ActionCreators)(ProfileScreen);
