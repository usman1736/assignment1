import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topItem}>LIVE</Text>
        <Text style={styles.topItem}>Gaming</Text>
        <Text style={styles.topItem}>Food</Text>
        <Text style={[styles.topItem, styles.activeTopItem]}>Sports</Text>
        <Text style={styles.topItem}>Fashion</Text>
      </View>

      {/* Main Video Area */}
      <View style={styles.videoArea}></View>

      {/* Right-Side Buttons */}
      <View style={styles.rightIcons}>
        <View style={styles.profileContainer}>
          <View style={styles.profileCircle}>
            <View style={styles.plusContainer}>
              <Text style={styles.plus}>＋</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionGroup}>
          <Text style={styles.iconText}>❤️</Text>
          <Text style={styles.count}>243.6K</Text>
        </View>

        <View style={styles.actionGroup}>
          <Text style={styles.iconText}>💬</Text>
          <Text style={styles.count}>990</Text>
        </View>

        <View style={styles.actionGroup}>
          <Text style={styles.iconText}>🔖</Text>
          <Text style={styles.count}>20.8K</Text>
        </View>

        <View style={styles.actionGroup}>
          <Text style={styles.iconText}>📤</Text>
          <Text style={styles.count}>773</Text>
        </View>
      </View>

      {/* Bottom Caption */}
      <View style={styles.bottomText}>
        <Text style={styles.username}>swishzone</Text>
        <Text style={styles.caption}>
          Episode 10 | name one thing he&apos;s not good at 🏀 #NBA #fyp
        </Text>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Friends</Text>
        <Text style={styles.addButton}>＋</Text>
        <Text style={styles.navItem}>Inbox</Text>
        <Text style={styles.navItem}>Profile</Text>
      </View>

      {/* Alert Button under nav */}
      <TouchableOpacity
        style={styles.alertWrapper}
        onPress={() => alert("Alert Button Pressed!")}
      >
        <Text style={styles.alertButton}>Alert</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", width: "35%" },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  topItem: { color: "gray", fontSize: 14, marginHorizontal: 8 },
  activeTopItem: { color: "white", fontWeight: "bold" },
  videoArea: { flex: 1, backgroundColor: "black" },
  rightIcons: {
    position: "absolute",
    right: 25,
    bottom: 150,
    alignItems: "center",
  },
  profileContainer: { alignItems: "center", marginBottom: 25 },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  plusContainer: {
    backgroundColor: "red",
    width: 18,
    height: 18,
    borderRadius: 9,
    position: "absolute",
    bottom: -5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: { color: "white", fontSize: 12 },
  actionGroup: { alignItems: "center", marginBottom: 25 },
  iconText: { fontSize: 22, color: "white" },
  count: { color: "white", fontSize: 13, marginTop: 3 },
  bottomText: {
    position: "absolute",
    left: 10,
    bottom: 115,
    width: "75%",
  },
  username: { color: "white", fontWeight: "bold" },
  caption: { color: "white", marginTop: 3 },
  bottomNav: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#121212",
    paddingVertical: 10,
  },
  navItem: { color: "white", fontSize: 14 },
  addButton: { color: "white", fontSize: 24 },
  alertWrapper: { position: "absolute", bottom: 25, alignSelf: "center" },
  alertButton: { color: "white", fontSize: 16 },
});
