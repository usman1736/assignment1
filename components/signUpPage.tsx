import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      {/* close button */}
      <View style={styles.containerCloseButton}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.textCloseButton}>X</Text>
        </TouchableOpacity>
      </View>
      {/*Title*/}
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Sign up for Tiktok</Text>
        {/* Sign Up Links */}
        <View style={styles.signUpLinks}>
          <Image
            style={styles.icon}
            source={require("../assets/images/person-icon.jpg")}
          />
          <Text>Use Phone or email</Text>
        </View>
        <View style={styles.signUpLinks}>
          <Image
            style={styles.icon}
            source={require("../assets/images/facebook-icon.webp")}
          />
          <Text>Continue with Facebook</Text>
        </View>
        <View style={styles.signUpLinks}>
          <Image
            style={styles.icon}
            source={require("../assets/images/google-icon.jpg")}
          />
          <Text>Continue with Google</Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
  },
  containerCloseButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginRight: 20,
  },
  closeButton: {
    backgroundColor: "#ECECEC",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textCloseButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainContainer: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  signUpLinks: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ECECEC",
    width: "70%",
    padding: 9,
    textAlign: "center",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    position: "absolute",
    left: 10,
  },
  styleLinksText: {
    justifyContent: "center",
  },
});
