import React, { useState } from "react";
import { Pressable, Text, View, Modal } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import colors from "../../styles/colors";

const Home = () => {
	const [count, setCount] = useState(0);
	const [target, setTarget] = useState(0);
	const [openModal, setOpenModal] = useState(false);

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
						<View style={styles.contentCircleTally}>
							<Text style={styles.count}>{count}</Text>
							<Text style={styles.target()}>/{target}</Text>
						</View>
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

			<Modal animationType="slide" transparent={true} visible={openModal}>
				<View style={styles.centeredModal}>
					<View style={styles.modal}>
						<Pressable onPress={() => setOpenModal(!openModal)}>
							<Text>Fechar</Text>
						</Pressable>
					</View>
				</View>
			</Modal>

			<Pressable
				style={styles.btnSetTarget}
				onPress={() => setOpenModal(!openModal)}
			>
				<Text style={styles.btnTextTarget}>Set target</Text>
			</Pressable>
		</View>
	);
};

export default Home;
