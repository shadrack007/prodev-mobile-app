import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_mainstyles";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  console.log("index screen");
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
        <ImageBackground
          resizeMode="cover"
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Find your favorite place here
              </Text>
              <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>
                  The best prices for over 2{" "}
                </Text>
                <Text style={styles.titleSubText}>
                  million properties worldwide
                </Text>
              </View>
            </View>

            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", paddingVertical: 20 }}>
              <Text style={styles.buttonGroupSubText}>Continue to home</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
