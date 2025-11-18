import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const open = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Can't open the link:", url);
      }
    } catch (err) {
      Alert.alert("An error occurred", err.message);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        {/* decorative overlapping circles */}
        <View style={styles.circleLeft} />
        <View style={styles.circleRight} />

        <Image
          source={{
            uri: "https://github.com/chiranthan-simha.png", // uses your GitHub avatar
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Chiranth Simha</Text>
        <Text style={styles.role}>React Native Developer</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity
            accessibilityLabel="Open GitHub profile"
            style={[styles.socialBtn, { backgroundColor: "#24292e" }]}
            onPress={() => open("https://github.com/chiranthan-simha")}
          >
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityLabel="Open LinkedIn profile"
            style={[styles.socialBtn, { backgroundColor: "#0A66C2" }]}
            onPress={() => open("https://www.linkedin.com/")}
          >
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card: About */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>About Me</Text>
        <Text style={styles.cardText}>
          Passionate mobile developer building clean and performant apps using React
          Native. I enjoy turning ideas into delightful user experiences.
        </Text>
      </View>

      {/* Card: Skills */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Skills</Text>

        <View style={styles.badgesRow}>
          <View style={[styles.badge, { backgroundColor: "#FF6B6B" }]}>
            <Text style={styles.badgeText}>JavaScript</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: "#4ECDC4" }]}>
            <Text style={styles.badgeText}>React Native</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: "#FFA06B" }]}>
            <Text style={styles.badgeText}>Node.js</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: "#5DA3FA" }]}>
            <Text style={styles.badgeText}>UI/UX</Text>
          </View>
        </View>

        {/* Skill progress */}
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>React Native</Text>
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: "85%" }]} />
          </View>
        </View>

        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>JavaScript</Text>
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: "88%", backgroundColor: "#FF8A65" }]} />
          </View>
        </View>

        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Node.js</Text>
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: "60%", backgroundColor: "#4EC9A6" }]} />
          </View>
        </View>
      </View>

      {/* Card: Contact */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact</Text>
        <Text style={styles.cardText}>📧 chiranthsimha1@gmail.com</Text>
        <Text style={[styles.cardText, { marginBottom: 12 }]}>📱 +91 90192 89814</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: "#6a11cb" }]}
            onPress={() => open("mailto:yourmail@example.com")}
          >
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
         

          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: "#2575fc" }]}
            onPress={() => open("tel:+919019289814")}
          >
            <Text style={styles.actionText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6F9" },

  /* Header */
  header: {
    height: 260,
    backgroundColor: "#6a11cb",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    overflow: "hidden",
    paddingTop: 10,
  },
  circleLeft: {
    position: "absolute",
    left: -90,
    top: -70,
    width: 220,
    height: 220,
    backgroundColor: "#2575fc",
    borderRadius: 200,
    opacity: 0.9,
  },
  circleRight: {
    position: "absolute",
    right: -60,
    top: -40,
    width: 160,
    height: 160,
    backgroundColor: "#ff7eb3",
    borderRadius: 160,
    opacity: 0.85,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 4,
  },
  role: {
    color: "#e6e6e6",
    marginTop: 4,
    fontSize: 13,
  },
  socialRow: {
    flexDirection: "row",
    marginTop: 12,
  },
  socialBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 6,
    elevation: 3,
  },
  socialText: { color: "#fff", fontWeight: "600" },

  /* Cards */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    // shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    // elevation for Android
    elevation: 4,
  },
  cardTitle: { fontSize: 18, fontWeight: "700", marginBottom: 8, color: "#222" },
  cardText: { fontSize: 15, color: "#555", lineHeight: 20 },

  /* Badges */
  badgesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    minWidth: 90,
    alignItems: "center",
  },
  badgeText: { color: "#fff", fontWeight: "700" },

  /* Progress */
  skillRow: { marginTop: 10 },
  skillLabel: { color: "#444", fontWeight: "600", marginBottom: 6 },
  progressBg: {
    height: 10,
    backgroundColor: "#eef2f7",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#6a11cb",
    borderRadius: 10,
  },

  /* Contact actions */
  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 8,
  },
  actionText: { color: "#fff", fontWeight: "700" },
});
