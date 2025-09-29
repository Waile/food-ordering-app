import { getLoadedFonts } from "expo-font";
import { Text, View } from "react-native";


export default function Index() {
  const fonts = getLoadedFonts()
  console.log("loaded `fonts in line 7 in index.tsx", JSON.stringify(fonts, null, 2));
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-center font-quicksand-bold" >
        Welcome to Tailwind!
      </Text>
    </View>
  );
}



