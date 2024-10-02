import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'anh',
            status: 'artist',
            imageUrl: 'https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?q=80&w=2209&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 2,
            name: 'duncan',
            status: 'journalist',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1709675364861-0723e7106c28?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 3,
            name: 'tabby',
            status: 'student',
            imageUrl: 'https://images.unsplash.com/photo-1544124094-8aea0374da93?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 4,
            name: 'ike',
            status: 'cashier',
            imageUrl: 'https://images.unsplash.com/photo-1542578985-15ccf7e6d990?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false} >
                {contacts.map((contact) => (
                    <View key={contact.uid} style={styles.userCard}>
                        <Image source={{uri: contact.imageUrl}} style={styles.userImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{contact.name}</Text>
                            <Text style={styles.status}>{contact.status}</Text>
                        </View>
                    </View>
                    
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    status: {},
    textContainer: {
        marginLeft: 14,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        padding: 16,
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
    },
    container: {
        padding: 16,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      paddingTop: 24,
    },
})
