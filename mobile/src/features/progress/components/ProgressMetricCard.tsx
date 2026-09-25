import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
  detail: string;
  progress: number;
  icon: string;
};

export default function ProgressMetricCard({ label, value, detail, progress, icon }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.iconCircle}>
          <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={13} color="#087C5B" />
        </View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, padding: 8, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.72)" },
  topRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  iconCircle: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#E8F3E9", alignItems: "center", justifyContent: "center" },
  label: { flex: 1, fontFamily: "PlusJakartaSans_600SemiBold", fontSize: 7.2, color: "#234B46" },
  detail: { fontFamily: "PlusJakartaSans_500Medium", fontSize: 6.5, color: "#71817D" },
  bottomRow: { marginTop: 7, flexDirection: "row", alignItems: "center", gap: 5 },
  track: { flex: 1, height: 4, borderRadius: 2, backgroundColor: "#DCE9DE", overflow: "hidden" },
  fill: { height: "100%", borderRadius: 2, backgroundColor: "#2D8C45" },
  value: { fontFamily: "PlusJakartaSans_600SemiBold", fontSize: 6.5, color: "#61736E" },
});
