import React, { useContext, useEffect, useState, useCallback } from "react";
import {
	Pressable,
	Text,
	View,
	Modal,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

import { styles } from "./styles";
import colors from "../../styles/colors";
import { ThemeContext } from "../../context/ThemeContext";

const clamp = (value, min, max) => {
	"worklet";
	return Math.min(Math.max(value, min), max);
};

const BUTTON_WIDTH = 300;

const Home = () => {
	const { theme } = useContext(ThemeContext);

	const [count, setCount] = useState(0);
	const [target, setTarget] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const [textColorCount, setTextColorCount] = useState(
		theme === "dark" ? colors.darkMode.yellow : colors.lightMode.secondary
	);
	const [borderColorCircle, setBorderColorCircle] = useState(undefined);

	const handlerCount = (change) => {
		if (change === "reset") {
			setCount(0);
		} else {
			change === "less"
				? setCount((prevState) => (prevState ? prevState - 1 : prevState))
				: setCount((prevState) => prevState + 1);
		}
	};

	useEffect(() => {
		if (target) {
			if (count > target) {
				setTextColorCount(colors.common.red);
				setBorderColorCircle(colors.common.red);
			} else if (count == target) {
				setTextColorCount(colors.common.blue);
				setBorderColorCircle(colors.common.blue);
			} else {
				setTextColorCount(
					theme === "dark" ? colors.darkMode.yellow : colors.lightMode.secondary
				);
				setBorderColorCircle(undefined);
			}
		} else {
			setTextColorCount(
				theme === "dark" ? colors.darkMode.yellow : colors.lightMode.secondary
			);
			setBorderColorCircle(undefined);
		}
	}, [count, target, theme]);

	// Animation
	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);

	const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 0.3;

	const incrementCount = useCallback(() => {
		setCount((prevState) => prevState + 1);
	}, []);

	const decrementCount = useCallback(() => {
		setCount((prevState) => (prevState ? prevState - 1 : prevState));
	}, []);

	const resetCount = useCallback(() => {
		setCount(0);
	}, []);

	const onPanGestureEvent = useAnimatedGestureHandler({
		onActive: (event) => {
			translateX.value = clamp(
				event.translationX,
				-MAX_SLIDE_OFFSET,
				MAX_SLIDE_OFFSET
			);

			translateY.value = count
				? clamp(event.translationY, 0, MAX_SLIDE_OFFSET)
				: 0;
		},
		onEnd: () => {
			if (translateX.value === MAX_SLIDE_OFFSET) {
				runOnJS(incrementCount)();
			} else if (translateX.value === -MAX_SLIDE_OFFSET) {
				runOnJS(decrementCount)();
			} else if (translateY.value === MAX_SLIDE_OFFSET) {
				runOnJS(resetCount)();
			}

			translateX.value = withSpring(0);
			translateY.value = withSpring(0);
		},
	});

	const rStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateX: translateX.value },
				{ translateY: translateY.value },
			],
		};
	}, []);

	const rButtonStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateX.value * 0.1,
				},
				{ translateY: translateY.value * 0.1 },
			],
		};
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Animated.View style={[styles.tallyCounter(theme), rButtonStyle]}>
					<Pressable onPress={() => handlerCount("less")}>
						<AntDesign
							name="minus"
							size={40}
							color={
								theme === "dark"
									? colors.darkMode.yellow
									: colors.lightMode.secondary
							}
						/>
					</Pressable>

					<PanGestureHandler onGestureEvent={onPanGestureEvent}>
						<Animated.View
							style={[
								styles.circleTally(borderColorCircle, theme),
								rStyle,
								styles.contentCircleTally,
							]}
						>
							<Text style={styles.count(textColorCount)}>{count}</Text>
							<Text style={styles.target(target)}>/{target}</Text>
						</Animated.View>
					</PanGestureHandler>

					<Pressable onPress={() => handlerCount("plus")}>
						<AntDesign
							name="plus"
							size={40}
							color={
								theme === "dark"
									? colors.darkMode.yellow
									: colors.lightMode.secondary
							}
						/>
					</Pressable>
				</Animated.View>

				{count ? (
					<Pressable
						onPress={() => handlerCount("reset")}
						style={{ zIndex: -100 }}
					>
						<MaterialIcons
							name="replay"
							size={40}
							color={
								theme === "dark"
									? colors.darkMode.yellow
									: colors.lightMode.secondary
							}
						/>
					</Pressable>
				) : null}
			</View>

			<Modal animationType="fade" transparent={true} visible={openModal}>
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss();
						setOpenModal(!openModal);
					}}
				>
					<View style={styles.centeredModal}>
						<View style={styles.modal(theme)}>
							<Text style={styles.titleModal(theme)}>Definir Meta</Text>
							<TextInput
								autoFocus={true}
								cursorColor={
									theme === "dark"
										? colors.darkMode.yellow
										: colors.lightMode.secondary
								}
								keyboardType="numeric"
								style={styles.inputTarget(theme)}
								value={target}
								defaultValue={target}
								onChangeText={setTarget}
								placeholder="Insira um valor"
								placeholderTextColor={colors.common.gray}
								onSubmitEditing={() => {
									Keyboard.dismiss();
									setOpenModal(!openModal);
								}}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<Pressable
				onPress={() => {
					target ? setTarget(0) : setOpenModal(!openModal);
				}}
			>
				<Text style={styles.btnTextTarget(target, theme)}>Definir Meta</Text>
			</Pressable>
		</View>
	);
};

export default Home;
