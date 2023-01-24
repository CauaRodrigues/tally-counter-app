import { StatusBar, useColorScheme } from "react-native";
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
import { ThemeContext } from "./src/context/ThemeContext";
import { useState } from "react";

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_300Light,
		Roboto_400Regular,
		Roboto_700Bold,
	});

	let userColorScheme = useColorScheme();
	const [theme, setTheme] = useState(userColorScheme);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{fontsLoaded ? (
				<Background>
					<StatusBar
						barStyle={`${theme === "dark" ? "light" : "dark"}-content`}
						backgroundColor={
							theme === "dark" ? colors.darkMode.main : colors.lightMode.main
						}
					/>
					<Home />
				</Background>
			) : (
				<Loading />
			)}
		</ThemeContext.Provider>
	);
}
