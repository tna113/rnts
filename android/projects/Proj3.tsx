import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox"
import Clipboard from "@react-native-clipboard/clipboard";

//form validation
import * as Yup from 'yup';
import { Formik } from "formik";

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, 'should be a min of 4 characters')
        .max(16, 'should be a max of 16 characters')
        .required('password length is required'),
});

export default function Proj3() {
    const [password, setPassword] = useState('');
    const [isPassGenerated, setIsPassGenerated] = useState(false);

    const [lowercase, setLowercase] = useState(true);
    const [uppercase, setUppercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false); 
    const [debug, setDebug] = useState('');

    const generatePasswordString = (passwordLength: number) => {
        let characterList = '';
        
        const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
        const digitCharacters = '0123456789';
        const specialCharacters = '!@#$%^&*()_+';

        if (uppercase) {
            characterList += uppercaseCharacters;
        }
        if (lowercase) {
            characterList += lowercaseCharacters;
        }
        if (numbers) {
            characterList += digitCharacters;
        }
        if (symbols) {
            characterList += specialCharacters;
        }

        const result = createPassword(characterList, passwordLength);
        setDebug(
            `lowercase: ${lowercase}, uppercase: ${uppercase}, numbers: ${numbers}, symbols: ${symbols}`
        );
        setPassword(result);
        setIsPassGenerated(true);
    }

    const createPassword = (characters: string, passwordLength: number) => {
        let result = '';
        for (let i=0; i<passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characters.length);
            result += characters.charAt(characterIndex);
        }
        return result;
    }

    const resetPassword = () => {
        setPassword('');
        setIsPassGenerated(false);
        setLowercase(true);
        setUppercase(false);
        setNumbers(false);
        setSymbols(false);
        setDebug('');
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.container}>
                <Text style={styles.heading}>password generator</Text>
                <View style={styles.formContainer}>
                <Formik
                    initialValues={{ passwordLength: '' }}
                    validationSchema={PasswordSchema}
                    onSubmit={(values) => {
                        generatePasswordString(+values.passwordLength);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        isValid,
                        handleChange,
                        handleSubmit,
                        handleReset,
                    }) => (
                        <>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>password length</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="ex. 8"
                                    keyboardType="numeric"
                                    //connect input with formik (value, onChangeText)
                                    value={values.passwordLength}
                                    onChangeText={handleChange('passwordLength')}
                                />
                                {touched.passwordLength && errors.passwordLength && (
                                <Text style={styles.error}>{errors.passwordLength}</Text> 
                                )}
                        </View>

                        <View style={styles.checkboxWrapper}>
                            <BouncyCheckbox 
                                isChecked={lowercase}
                                onPress={() => setLowercase(!lowercase)}
                                fillColor="#29AB87"
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>include lowercase</Text>
                        </View>
                        <View style={styles.checkboxWrapper}>
                            <BouncyCheckbox 
                                isChecked={uppercase}
                                onPress={() => setUppercase(!uppercase)}
                                fillColor="#29AB87"
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>include uppercase</Text>
                        </View>
                        <View style={styles.checkboxWrapper}>
                            <BouncyCheckbox 
                                isChecked={numbers}
                                onPress={() => setNumbers(!numbers)}
                                fillColor="#29AB87"
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>include numbers</Text>
                        </View>
                        <View style={styles.checkboxWrapper}>
                            <BouncyCheckbox 
                                isChecked={symbols}
                                onPress={() => setSymbols(!symbols)}
                                fillColor="#29AB87"
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>include symbols</Text>
                        </View>
                        

                        <View style={styles.formActions}>
                            <TouchableOpacity
                                disabled={!isValid}
                                style={styles.primaryButton}
                                onPress={() => handleSubmit()}
                            >
                                <Text>generate password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.secondaryButton}
                                onPress={() => {
                                    handleReset();
                                    resetPassword();
                                }}
                            >
                                <Text>reset</Text>
                            </TouchableOpacity>
                        </View>
                        </>
                    )}
                    </Formik>
                </View>
                {isPassGenerated && (
                    <TouchableOpacity 
                        style={styles.resultsCard}
                        onPress={() => {
                            Clipboard.setString(password);
                        }}
                    >
                        <Text style={styles.resultTitle}>click to copy</Text>
                        <Text style={styles.resultSubtitle}>{password}</Text>
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    heading: {
        fontSize: 40,
        paddingVertical: 16,
    },
    formContainer: {},
    inputWrapper: {
        marginBottom: 24,
    },
    label: {
        fontSize: 20,
        paddingVertical: 4,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    error: {
        color: 'red',
    },
    checkboxWrapper: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
        marginBottom: 8,
    },
    checkbox: {
        width: 25,
    },
    formActions: {
        flex:1,
        flexDirection: 'row',
        gap: 8,
    }, 
    primaryButton: {
        backgroundColor: '#29AB87',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignItems: 'center',
    },
    secondaryButton: {
        backgroundColor: '#E8E8E8',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignItems: 'center',
    },
    resultsCard: {
        minHeight: 200,
        marginVertical: 36,
        backgroundColor: '#E8E8E8',
        padding: 24,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    resultTitle: {
        fontSize:20,
    },
    resultSubtitle:{
        fontWeight: '600',
        fontSize:32,
    },
})