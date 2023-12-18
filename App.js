import "react-native-gesture-handler";
import { AuthProvider } from "./context/AuthContext";
import { AppNav } from "./navigation/AppNav";

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
