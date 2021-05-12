import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    return;
  }

  try {
    // Get the token that uniquely identifies this device
    let token = (await Notifications.getExpoPushTokenAsync()).data;

    //SAVE TOKEN to reducer for when login
    return { token };
  } catch (error) {
    return { error };
  }
}

export default registerForPushNotificationsAsync;
