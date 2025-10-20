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
        <View style={styles.signUpLinks}>
          <Image
            style={styles.icon}
            source={require("../assets/images/Line.png")}
          />
          <Text>Continue with Line</Text>
        </View>
        <View style={styles.signUpLinks}>
          <Image
            style={styles.icon}
            source={require("../assets/images/KakaoTalk.png")}
          />
          <Text>Continue with KakaoTalk</Text>
        </View>
        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            By continuing with an account located in
            <Text style={styles.descriptionHighlights}> Signapore</Text>, 
            you agree to our <Text style={styles.descriptionHighlights}>Terms of Service </Text> 
            and acknowledge that you have read our
            <Text style={styles.descriptionHighlights}> Privacy Policy</Text>.
          </Text>
        </View>
        {/* Log In */}
        <View style={styles.logInContainer}>
          <Text style={styles.logInText}>Already haven an account? <Text style={{color: "rgba(225, 108, 165, 1)", fontWeight: "bold"}}>Log in</Text></Text>
        </View>
      </View>
    </View>
  );
};
 
export default SignUpPage;
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // flex: 1,
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
  description: {
    textAlign: "center",
    width: "70%",
    color: "rgba(0, 0, 0, 0.5)"
  },
  descriptionContainer: {
    alignItems: "center",
    marginTop: 100,
  },

  descriptionHighlights: {
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.6)"
  },

  logInContainer: {
    borderTopWidth: 1,
    width: "100%",
    padding: 20,
    marginTop: 15
  },

  logInText: {
    fontSize: 17,
    textAlign: "center"
  }
});