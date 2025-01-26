import { Stack } from "expo-router";
import "react-native-reanimated";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen name="tmaj" options={{ title: "Tell me a joke" }}/>
    </Stack>
  );
}
