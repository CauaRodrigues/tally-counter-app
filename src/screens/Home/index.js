import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import colors from "../../styles/colors";

const Home = () => {
	const [count, setCount] = useState(0);

	const handlerCount = (change) => {
		if (change === "reset") {
			setCount(0);
		} else {
			change === "less"
				? setCount(count ? count - 1 : count)
				: setCount(count + 1);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<View style={styles.tallyCounter}>
					<Pressable onPress={() => handlerCount("less")}>
						<AntDesign name="minus" size={40} color={colors.primary} />
					</Pressable>

					<Pressable
						style={styles.circleTally}
						onPress={() => handlerCount("plus")}
					>
						<Text style={styles.count}>{count}</Text>
					</Pressable>

					<Pressable onPress={() => handlerCount("plus")}>
						<AntDesign name="plus" size={40} color={colors.primary} />
					</Pressable>
				</View>

				{count ? (
					<Pressable onPress={() => handlerCount("reset")}>
						<MaterialIcons name="replay" size={40} color={colors.primary} />
					</Pressable>
				) : null}
			</View>
		</View>
	);
};

export default Home;
