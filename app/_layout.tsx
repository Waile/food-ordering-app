import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded,error] = useFonts({
    "QuickSand_Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand_Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand_Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand_SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "QuickSand_Light": require("../assets/fonts/Quicksand-Light.ttf")
  })
  console.log("error in line 14 in _layout.tsx", JSON.stringify(error, null, 2));
  console.log("fontsLoaded in line 15 in _layout.tsx", JSON.stringify(fontsLoaded, null, 2));

  useEffect(() => {
    if(error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded,error])
  

  return <Stack screenOptions={{headerShown:false}} />;
}
