import "react-native-gesture-handler";
import { AuthProvider } from "./context/AuthContext";
import { AppNav } from "./navigation/AppNav";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
      <StatusBar style="light" />
    </AuthProvider>
  );
};

export default App;
