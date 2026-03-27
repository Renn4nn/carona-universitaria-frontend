import { Header } from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const recentRides = [
    {
      id: "1",
      origin: "UP - Londrina",
      destination: "Centro",
      date: "2024-03-26",
      time: "18:00",
      availableSeats: 3,
      cost: 5.0,
      driverName: "Maria Santos",
      driverRating: 4.9,
      status: "scheduled" as const,
    },
    {
      id: "2",
      origin: "Jardim Piza",
      destination: "UP - Londrina",
      date: "2024-03-27",
      time: "07:30",
      availableSeats: 2,
      cost: 6.0,
      driverName: "Pedro Lima",
      driverRating: 4.7,
      status: "scheduled" as const,
    },
    {
      id: "3",
      origin: "UP - Londrina",
      destination: "Centro",
      date: "2024-03-26",
      time: "18:00",
      availableSeats: 3,
      cost: 5.0,
      driverName: "Maria Santos",
      driverRating: 4.9,
      status: "scheduled" as const,
    },
    {
      id: "4",
      origin: "Jardim Piza",
      destination: "UP - Londrina",
      date: "2024-03-27",
      time: "07:30",
      availableSeats: 2,
      cost: 6.0,
      driverName: "Pedro Lima",
      driverRating: 4.7,
      status: "scheduled" as const,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Header
        title="Carona Universitária"
        rightElement={
          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => console.log("Notification pressed")}
          >
            <Ionicons name="notifications-outline" size={24} color="#1a1a2e" />
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.greeting}>Olá, Estudante! 👋</Text>
          <Text style={styles.subtitle}>
            Encontre ou ofereça caronas para a UP
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => console.log("Buscar Carona pressed")}
          >
            <View style={[styles.actionIcon, { backgroundColor: "#e7f5ff" }]}>
              <Ionicons name="search" size={28} color="#228be6" />
            </View>
            <Text style={styles.actionTitle}>Buscar Carona</Text>
            <Text style={styles.actionDescription}>
              Encontre caronas disponíveis
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => console.log("Oferecer Carona pressed")}
          >
            <View style={[styles.actionIcon, { backgroundColor: "#e6fcf5" }]}>
              <Ionicons name="add-circle" size={28} color="#40c057" />
            </View>
            <Text style={styles.actionTitle}>Oferecer Carona</Text>
            <Text style={styles.actionDescription}>Cadastre sua viagem</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Caronas realizadas</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4.8</Text>
            <Text style={styles.statLabel}>Sua avaliação</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>R$ 45</Text>
            <Text style={styles.statLabel}>Economia total</Text>
          </View>
        </View>

        {/* Recent Rides */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Caronas Recentes</Text>
            <TouchableOpacity onPress={() => console.log("Ver todas pressed")}>
              <Text style={styles.seeAll}>Ver todas</Text>
            </TouchableOpacity>
          </View>

          {recentRides.length > 0 ? (
            recentRides.map((ride) => <View key={ride.id} {...ride} />)
          ) : (
            <View>
              <Ionicons name="car-outline" size={48} color="#666" />
              <Text style={styles.emptyTitle}>Nenhuma carona disponível</Text>
              <Text style={styles.emptyDescription}>
                Seja o primeiro a oferecer uma carona!
              </Text>
            </View>
          )}
        </View>

        {/* Safety Banner */}
        <View style={styles.safetyBanner}>
          <Ionicons name="shield-checkmark" size={32} color="#40c057" />
          <View style={styles.safetyContent}>
            <Text style={styles.safetyTitle}>Caronas Seguras</Text>
            <Text style={styles.safetyText}>
              Todos os usuários são verificados com email @cs.up.edu.br
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    flex: 1,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeSection: {
    padding: 20,
    paddingTop: 8,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a2e",
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    marginTop: 4,
  },
  quickActions: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#212529",
  },
  actionDescription: {
    fontSize: 12,
    color: "#adb5bd",
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a2e",
  },
  statLabel: {
    fontSize: 12,
    color: "#6c757d",
    marginTop: 4,
    textAlign: "center",
  },
  statDivider: {
    width: 1,
    backgroundColor: "#e9ecef",
    marginHorizontal: 12,
  },
  section: {
    padding: 20,
    paddingTop: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#212529",
  },
  seeAll: {
    fontSize: 14,
    color: "#228be6",
    fontWeight: "500",
  },
  safetyBanner: {
    flexDirection: "row",
    backgroundColor: "#e6fcf5",
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  safetyContent: {
    marginLeft: 12,
    flex: 1,
  },
  safetyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
  },
  safetyText: {
    fontSize: 13,
    color: "#495057",
    marginTop: 2,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
    marginTop: 12,
  },
  emptyDescription: {
    fontSize: 14,
    color: "#6c757d",
    marginTop: 4,
    textAlign: "center",
  },
});
