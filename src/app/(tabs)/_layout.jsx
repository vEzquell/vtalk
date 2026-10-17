import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#818CF8",
                tabBarInactiveTintColor: "#94A3B8",
                tabBarStyle: {
                    backgroundColor: "#171E2D",
                    borderTopWidth: 0,
                    height: 65,
                    paddingTop: 8,
                    paddingBottom: 8,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                },
                sceneStyle: {
                    backgroundColor: "#0F0B19",
                },
            }}
        >
            {/* Bottom Navigation Tabs */}
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={24}
                            color={color}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                title: "Settings",
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                    name={focused ? "settings" : "settings-outline"}
                    size={23}
                    color={color}
                    />
                ),
                }}
            />

        </Tabs>
    )
}