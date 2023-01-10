import React from "react";
import { View } from "react-native";
import Header from "../Header";
import { styles } from "./styles";

const Background = ({ children }) => {
	return (
		<View style={styles.background}>
			<Header />

			<View style={styles.main}>{children}</View>
		</View>
	);
};

export default Background;
