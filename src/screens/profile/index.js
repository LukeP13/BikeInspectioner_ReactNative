import React, { useEffect, useState } from "react";
import {
  AppState,
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "react-native-elements";
import { ScreenContainer } from "react-native-screens";
import { connect } from "react-redux";
import strings from "../../../res/strings";

import * as ActionCreators from "../../actions";
import Api from "../../controllers/api";
import AppScreenContainer from "../../library/components/appScreenContainer";
import mycolors from "../../../res/colors";
import images from "../../../res/images";

const ProfileScreen = ({
  navigation,
  logout,
  notificationsEnabled,
  switchDisabled,
  getUser,
  user,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  function fetchData() {
    getUser().then(({ error }) => {
      !error && setLoaded(true);
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      isActive && fetchData();

      return () => {
        isActive = false;
      };
    }, [navigation])
  );

  useEffect(() => {
    AppState.addEventListener("change", fetchData);

    return () => {
      AppState.removeEventListener("change", fetchData);
    };
  }, []);

  //Notifications
  const [isEnabled, setEnabled] = useState(notificationsEnabled);
  const toggleSwitch = () => {
    isEnabled ? props.disableNotifications() : props.enableNotifications();
    setEnabled(!isEnabled);
  };

  useEffect(() => setEnabled(notificationsEnabled), [notificationsEnabled]);

  //Functions
  function onLogout() {
    logout();
  }

  function onEdit() {
    navigation.navigate("Edit", { user });
  }

  const { username, email, phone, avatar } = user;
  return (
    <AppScreenContainer navigation={navigation} title="Profile">
      {loaded && (
        <View style={styles.container}>
          <Image
            style={styles.avatar}
            source={avatar ? { uri: Api.getImageUri(avatar) } : images.noImage}
          />

          <View style={styles.infoView}>
            <Text style={styles.infoText}>{username}</Text>
          </View>

          <View style={styles.infoView}>
            <Text style={styles.infoText}>{email}</Text>
          </View>

          {phone && (
            <View style={styles.infoView}>
              <Text style={styles.infoText}>{phone}</Text>
            </View>
          )}

          <View style={styles.separator} />

          <View style={styles.switchNotifications}>
            <Text style={styles.notificationsText}>
              {strings.notifications}
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#beddc4" }}
              thumbColor={notificationsEnabled ? "#3dcc57" : "#f4f3f4"}
              ios_backgroundColor="#5DC571"
              onValueChange={toggleSwitch}
              value={isEnabled}
              disabled={switchDisabled}
            />
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={onEdit}>
            <Text style={styles.logoutText}>Edit user</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutText}>{strings.logout}</Text>
          </TouchableOpacity>
        </View>
      )}
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
    alignItems: "center",
    paddingVertical: 5,
  },
  logoutText: {
    color: colors.primary,
    fontSize: 20,
  },
  switchNotifications: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 150,
    marginBottom: 5,
  },
  notificationsText: {
    fontSize: 15,
    color: colors.black,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: mycolors.secondaryColor,
    marginTop: 30,
    marginBottom: 10,
  },
  infoView: {
    marginTop: 5,
  },
  infoText: {
    fontSize: 16,
  },
  separator: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    width: "70%",
    marginTop: 90,
    marginBottom: 15,
  },
});

function mapStateToProps({ user, notifications: { enabled, token } }) {
  return {
    user,
    notificationsEnabled: enabled,
    switchDisabled: token ? false : true,
  };
}

export default connect(mapStateToProps, ActionCreators)(ProfileScreen);
