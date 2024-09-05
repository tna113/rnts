import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import FlatCards from "../components/FlatCards";

export default function Proj2() {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <FlatCards />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});