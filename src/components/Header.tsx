import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  rightElement?: React.ReactNode;
  onBackPress?: () => void;
}

export function Header({ title, showBackButton = false, rightElement, onBackPress }: HeaderProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 16 }]}>
      <View style={styles.content}>
        {showBackButton ? (
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBackPress || (() => router.back())}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={28} color="#1a1a2e" />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <View style={styles.rightContainer}>
          {rightElement || <View style={styles.placeholder} />}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "rgba(15, 23, 42, 0.9)", 
    marginTop: 15,
    marginHorizontal: 16,
    borderRadius: 32, 
    borderWidth: 1.5,
    
    borderColor: 'rgba(255, 255, 255, 0.05)', 
    paddingTop: 18,
    shadowColor: "#1d1c1c",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingBottom: 18,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
  
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 14,
    fontWeight: '900',

    color: '#f7fbfd', 
    flex: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 4.5, 
  },
  rightContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
});