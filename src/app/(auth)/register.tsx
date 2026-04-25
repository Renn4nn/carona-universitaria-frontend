import { Button } from "@/components/Button";
import Input from "@/components/Input";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COURSES = [
  "Engenharia de Software",
  "Engenharia de Computação",
  "Sistemas de Informação",
  "Ciência da Computação",
  "Administração",
  "Direito",
  "Medicina",
  "Psicologia",
  "Outro",
];

export default function RegisterScreen() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      ra: "",
      course: "",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back" size={28} color="#1a1a2e" />
            </TouchableOpacity>
            <Text style={styles.title}>Criar Conta</Text>
            <Text style={styles.subtitle}>Junte-se à comunidade UP</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Nome Completo"
                  placeholder="Seu nome completo"
                  value={value}
                  onChangeText={onChange}
                  error={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Email Institucional"
                  placeholder="seu.nome@cs.up.edu.br"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  error={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Telefone"
                  placeholder="(43) 99999-9999"
                  keyboardType="phone-pad"
                  value={value}
                  onChangeText={onChange}
                  error={errors.phone?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="ra"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="RA"
                  placeholder="12345678"
                  keyboardType="numeric"
                  value={value}
                  onChangeText={onChange}
                  error={errors.ra?.message}
                />
              )}
            />

            <Text style={styles.label}>Curso</Text>
            <View style={styles.coursesContainer}>
              {COURSES.map((course) => (
                <TouchableOpacity
                  key={course}
                  style={[styles.courseChip]}
                  onPress={() => setValue("course", course)}
                >
                  <Text style={styles.courseText}>{course}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {errors.course && (
              <Text style={styles.errorText}>{errors.course.message}</Text>
            )}

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Senha"
                  placeholder="Mínimo 6 caracteres"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  error={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Confirmar Senha"
                  placeholder="Digite a senha novamente"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  error={errors.confirmPassword?.message}
                />
              )}
            />

            <Button
              label="Cadastrar"
              onPress={() => console.log("Cadastrar")}
              size="large"
              style={styles.submitButton}
            />
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta?</Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={styles.footerLink}>Faça login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    marginTop: 20,
    marginBottom: 32,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1a1a2e",
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    marginTop: 8,
  },
  form: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 8,
    marginTop: 8,
  },
  coursesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  courseChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f1f3f5",
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  courseChipActive: {
    backgroundColor: "#1a1a2e",
    borderColor: "#1a1a2e",
  },
  courseText: {
    fontSize: 13,
    color: "#495057",
    fontWeight: "500",
  },
  courseTextActive: {
    color: "#ffffff",
  },
  errorText: {
    color: "#dc3545",
    fontSize: 12,
    marginTop: 4,
  },
  submitButton: {
    marginTop: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    gap: 8,
  },
  footerText: {
    fontSize: 15,
    color: "#6c757d",
  },
  footerLink: {
    fontSize: 15,
    color: "#1a1a2e",
    fontWeight: "600",
  },
});
