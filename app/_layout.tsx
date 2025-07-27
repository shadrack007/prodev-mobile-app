import { Stack } from "expo-router";

export default function RootLayout() {
  console.log("layout screen");
  return <Stack screenOptions={{ headerShown: false }} />;
}
