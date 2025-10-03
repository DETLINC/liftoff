import { Stack } from "expo-router";
import "../global.css"; // This is the crucial step
import TabLayout from "./(tabs)/_layout";
import BackGroundSvg from "../components/icons/tabBar/BG";
import { useFonts } from "expo-font";
import { CartProvider } from "../context/CartContext";

function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraLightItalic": require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a SplashScreen
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="product/[id]" />
      <Stack.Screen name="MyCart/Cart" />
    </Stack>
  );
}

const RootLayoutNav = () => {
  return (
    <CartProvider>
      <RootLayout />
    </CartProvider>
  );
};

export default RootLayoutNav;
