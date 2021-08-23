import React from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import CustomListItem from "../components/CustomListItem";

const HomeScreen = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<CustomListItem />
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
