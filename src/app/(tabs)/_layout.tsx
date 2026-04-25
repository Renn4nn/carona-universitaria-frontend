import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2f3e44", 
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.2)",
        
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "rgba(15, 23, 42, 0.9)", 
          bottom: 25,          
          width: '50%',       
          left: '25%',        
          borderRadius: 35,    
          borderWidth: 1.5,
          borderColor: "rgba(255, 255, 255, 0.08)", 
          height: 65,          
          
    
          paddingBottom: 0,
          paddingTop: 0,
          borderTopWidth: 1.5, 
          borderTopColor: "rgba(255, 255, 255, 0.08)",
          
          elevation: 5,        
          shadowColor: "#000", 
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.35,
          shadowRadius: 20,
        },
        
        tabBarShowLabel: false, 
        tabBarItemStyle: {
          height: 65,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          padding: 0, 
          margin: 0,  
        },
        tabBarIconStyle: {
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          padding: 0,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <Ionicons 
              name="car" 
              size={32} 
              color={color} 
              style={{ 
                textAlign: 'center',
                includeFontPadding: false,
              }} 
            /> 
          ),
        }}
      />
    </Tabs>
  );
}