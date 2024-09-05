import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import FlatCards from "../components/FlatCards";
import ScrollCards from "../components/ScrollCards";
import FancyCards from "../components/FancyCards";

export default function Proj2() {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <FlatCards />
                <ScrollCards />
                <FancyCards />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});