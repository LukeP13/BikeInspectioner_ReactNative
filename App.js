import React, { useEffect } from "react";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import RootComponent from "./src/root";
import { store, persistor } from "./src/store";
import { AppearanceProvider, Appearance } from "react-native-appearance";

const App = () => {
  Appearance.set({ colorScheme: "light" });
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider>
    </AppearanceProvider>
  );
};

export default App;
