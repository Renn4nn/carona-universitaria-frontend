import { Header } from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const recentRides = [
    { id: "1", origin: "UP - Londrina", destination: "Centro", time: "18:00", cost: 5.0, driverName: "Maria Santos" },
    { id: "2", origin: "Jardim Piza", destination: "UP - Londrina", time: "07:30", cost: 6.0, driverName: "Pedro Lima" },
    { id: "3", origin: "Gleba Palhano", destination: "UP - Londrina", time: "08:15", cost: 8.5, driverName: "Lucas Silva" },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Header 
        title="Carona Universitária" 
        rightElement={
          <TouchableOpacity style={styles.notificationButton} activeOpacity={0.7}>
            <View style={{ position: 'relative' }}>
              <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
              <View style={styles.dot} />
            </View>
          </TouchableOpacity>
        } 
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeSection}>
          <Text style={styles.greeting}>Olá, Estudante! 👋</Text>
          <Text style={styles.subtitle}>Sua próxima jornada começa aqui.</Text>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
            <View style={[styles.actionIcon, { backgroundColor: "rgba(31, 181, 255, 0.1)" }]}>
              <Ionicons name="search" size={26} color="#1fb5ff" />
            </View>
            <Text style={styles.actionTitle}>Buscar</Text>
            <Text style={styles.actionDescription}>Ir para a facul</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
            <View style={[styles.actionIcon, { backgroundColor: "rgba(74, 222, 128, 0.1)" }]}>
              <Ionicons name="add-circle" size={26} color="#4ADE80" />
            </View>
            <Text style={styles.actionTitle}>Oferecer</Text>
            <Text style={styles.actionDescription}>Dar carona</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Viagens</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: "#1fb5ff" }]}>R$ 45</Text>
            <Text style={styles.statLabel}>Economia</Text>
          </View>
        </View>

        <View style={styles.section}>
          {/* CORREÇÃO AQUI: Troquei div por View */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Atividade Recente</Text>
            <Text style={styles.seeAll}>Ver histórico</Text>
          </View>

          {recentRides.map((ride) => (
            <TouchableOpacity key={ride.id} style={styles.rideCard} activeOpacity={0.6}>
              <View style={styles.rideInfo}>
                <Text style={styles.rideRoute}>{ride.origin} → {ride.destination}</Text>
                <Text style={styles.rideDriver}>{ride.driverName} • {ride.time}</Text>
              </View>
              <Text style={styles.rideCost}>R$ {ride.cost.toFixed(2)}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.safetyBanner}>
          <View style={styles.safetyIconBg}>
            <Ionicons name="shield-checkmark" size={20} color="#4ADE80" />
          </View>
          <View style={styles.safetyContent}>
            <Text style={styles.safetyTitle}>Comunidade Segura</Text>
            <Text style={styles.safetyText}>Apenas e-mails @cs.up.edu.br</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#03092c",
  },
  content: {
    flex: 1,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22, 
    backgroundColor: "rgba(255, 255, 255, 0.08)", 
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)", 
  },
  dot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10, 
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444', 
    borderWidth: 1.5,
    borderColor: '#03092c', 
  },
  welcomeSection: {
    padding: 24,
  },
  greeting: {
    fontSize: 32,
    fontWeight: "900",
    color: "#F8FAFC",
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    color: "#94A3B8",
    marginTop: 4,
  },
  quickActions: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.04)", 
    borderRadius: 28,
    padding: 24,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F1F5F9",
  },
  actionDescription: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.03)", 
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 30,
    paddingVertical: 25,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "#F8FAFC",
  },
  statLabel: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 4,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  statDivider: {
    width: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginVertical: 4,
  },
  section: {
    marginTop: 35,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#F8FAFC",
  },
  seeAll: {
    fontSize: 14,
    color: "#1fb5ff",
    fontWeight: "700",
  },
  rideCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.03)", 
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.06)",
  },
  rideInfo: {
    flex: 1,
  },
  rideRoute: {
    fontSize: 15,
    fontWeight: '700',
    color: "#F1F5F9",
  },
  rideDriver: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },
  rideCost: {
    fontSize: 17,
    fontWeight: '900',
    color: "#4ADE80",
  },
  safetyBanner: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 100,
    borderRadius: 24,
    padding: 20,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  safetyIconBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  safetyContent: {
    marginLeft: 12,
    flex: 1,
  },
  safetyTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#F1F5F9",
  },
  safetyText: {
    fontSize: 12,
    color: "#94A3B8",
  },
});