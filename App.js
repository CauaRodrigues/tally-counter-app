import { StatusBar } from "react-native";
import {
	useFonts,
	Roboto_300Light,
	Roboto_300Light_Italic,
	Roboto_400Regular,
	Roboto_400Regular_Italic,
	Roboto_500Medium,
	Roboto_500Medium_Italic,
	Roboto_700Bold,
	Roboto_700Bold_Italic,
} from "@expo-google-fonts/roboto";

import Background from "./src/components/Background";
import { Loading } from "./src/components/Loading";
import colors from "./src/styles/colors";
import Home from "./src/screens/Home";

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_300Light,
		Roboto_400Regular,
		Roboto_700Bold,
	});

	return fontsLoaded ? (
		<Background>
			<StatusBar barStyle="light-content" backgroundColor={colors.bgDark} />
			<Home />
		</Background>
	) : (
		<Loading />
	);
}
