import React, { useContext } from "react";
import { View } from "react-native";

import { ThemeContext } from "../../context/ThemeContext";
import Header from "../Header";
import { styles } from "./styles";

const Background = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<View style={styles.background(theme)}>
			<Header />

			<View style={styles.main}>{children}</View>
		</View>
	);
};

export default Background;
