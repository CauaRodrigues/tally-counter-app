import { StatusBar } from "react-native";
import {
	useFonts,
	Roboto_300Light,
	Roboto_400Regular,
	Roboto_700Bold,
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
