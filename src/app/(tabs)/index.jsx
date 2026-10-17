
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    FlatList,
    Modal,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Index() {
    const [channels, setChannels] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [channelName, setChannelName] = useState("");
    const [channelPassword, setChannelPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const addChannel = () => {
        const name = channelName.trim();

        if (!name) return;

        const newChannel = {
        id: Date.now().toString(),
        name,
        password: channelPassword,
        };

        setChannels((prev) => [...prev, newChannel]);
        setChannelName("");
        setChannelPassword("");
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <View>
                <Text style={styles.title}>Channels</Text>
                <Text style={styles.subtitle}>
                    Connect and start talking
                </Text>
                </View>

                <TouchableOpacity
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
                >
                <Ionicons name="add" size={20} color="#fff" />
                <Text style={styles.addButtonText}>Add Channel</Text>
                </TouchableOpacity>
            </View>

            {/* Channel List */}
            <FlatList
                data={channels}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                <View style={styles.emptyContainer}>
                    <Ionicons
                    name="radio-outline"
                    size={56}
                    color="#475569"
                    />
                    <Text style={styles.emptyTitle}>
                    No channels yet
                    </Text>
                    <Text style={styles.emptySubtitle}>
                    Create your first channel to get started.
                    </Text>
                </View>
                }
                renderItem={({ item }) => (
                <TouchableOpacity style={styles.channelCard}>
                    <View style={styles.channelIcon}>
                    <Ionicons
                        name="radio"
                        size={24}
                        color="#A5B4FC"
                    />
                    </View>

                    <View style={{ flex: 1 }}>
                    <Text style={styles.channelName}>
                        {item.name}
                    </Text>
                    <Text style={styles.channelInfo}>
                        Local channel
                    </Text>
                    </View>

                    <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="#94A3B8"
                    />
                </TouchableOpacity>
                )}
            />

            {/* Create Channel Modal */}
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                        Create Channel
                        </Text>

                        <Text style={styles.modalSubtitle}>
                            Enter a name for your new channel.
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Channel name"
                            placeholderTextColor="#64748B"
                            value={channelName}
                            onChangeText={setChannelName}
                            maxLength={40}
                        />

                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Channel Password (optional)"
                                placeholderTextColor="#64748B"
                                value={channelPassword}
                                onChangeText={setChannelPassword}
                                secureTextEntry={!showPassword}
                                maxLength={40}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />

                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Ionicons
                                name={showPassword ? "eye-off-outline" : "eye-outline"}
                                size={22}
                                color="#94A3B8"
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalActions}>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.cancelText}>
                                Cancel
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.createButton}
                                onPress={addChannel}
                            >
                                <Text style={styles.createText}>
                                Create
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0F19",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 44,
        paddingBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#F8FAFC",
    },
    subtitle: {
        color: "#94A3B8",
        fontSize: 12,
        marginTop: 4,
    },
    addButton: {
        backgroundColor: "#6366F1",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 11,
        borderRadius: 12,
        gap: 4,
    },
    addButtonText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "600",
    },
    list: {
        paddingHorizontal: 20,
        paddingBottom: 24,
        flexGrow: 1,
    },
    channelCard: {
        backgroundColor: "#151C2B",
        borderRadius: 16,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        gap: 12,
    },
    channelIcon: {
        backgroundColor: "#263453",
        padding: 12,
        borderRadius: 12,
    },
    channelName: {
        color: "#F8FAFC",
        fontSize: 16,
        fontWeight: "600",
    },
    channelInfo: {
        color: "#94A3B8",
        fontSize: 12,
        marginTop: 4,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    emptyTitle: {
        color: "#F8FAFC",
        fontSize: 18,
        fontWeight: "600",
        marginTop: 16,
    },
    emptySubtitle: {
        color: "#94A3B8",
        textAlign: "center",
        marginTop: 8,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.75)",
        justifyContent: "center",
        padding: 24,
    },
    modalContent: {
        backgroundColor: "#1E293B",
        padding: 24,
        borderRadius: 20,
    },
    modalTitle: {
        color: "#F8FAFC",
        fontSize: 20,
        fontWeight: "bold",
    },
    modalSubtitle: {
        color: "#94A3B8",
        marginTop: 8,
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#0F172A",
        borderRadius: 12,
        padding: 14,
        color: "#FFFFFF",
        fontSize: 15,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#0F172A",
        borderRadius: 12,
        paddingHorizontal: 14,
        marginTop: 12,
    },

        passwordInput: {
        flex: 1,
        color: "#FFFFFF",
        fontSize: 15,
        paddingVertical: 14,
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 24,
        gap: 12,
    },
    cancelButton: {
        padding: 12,
    },
    cancelText: {
        color: "#94A3B8",
    },
    createButton: {
        backgroundColor: "#6366F1",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 10,
    },
    createText: {
        color: "#FFFFFF",
        fontWeight: "600",
    },
});
