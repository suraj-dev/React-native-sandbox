import { Redirect } from "expo-router";

export default function InitialScreen() {
  // workaround for expo router not detecting /(tabs)/home to be the default screen on launch
  return <Redirect href="/(tabs)/home" />;
}
