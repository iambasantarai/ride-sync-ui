import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default App;
