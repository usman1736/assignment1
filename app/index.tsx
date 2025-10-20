import HomePage from "@/components/homePage";
import SignUpPage from "@/components/signUpPage";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* HomePage */}
      {/* <HomePage /> */}
      {/* Sign Up Page */}
      <SignUpPage />
    </View>
  );
}
