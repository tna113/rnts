import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import FlatCards from "../components/FlatCards";
import ScrollCards from "../components/ScrollCards";
import FancyCards from "../components/FancyCards";
import ActionCard from "../components/ActionCard";
import ContactList from "../components/ContactList";

export default function Proj2() {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <FlatCards />
                <ScrollCards />
                <FancyCards />
                <ActionCard />
                <ContactList />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
});