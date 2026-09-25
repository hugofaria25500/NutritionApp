import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type ExploreFilterSheetProps = {
  visible: boolean;
  onClose: () => void;
  selectedTime: "all" | "15" | "30";
  selectedDifficulty: "all" | "easy" | "medium";
  onTimeChange: (value: "all" | "15" | "30") => void;
  onDifficultyChange: (value: "all" | "easy" | "medium") => void;
  onReset: () => void;
};

type OptionProps = {
  label: string;
  active: boolean;
  onPress: () => void;
};

function Option({ label, active, onPress }: OptionProps) {
  return (
    <Pressable
      style={[styles.option, active && styles.activeOption]}
      onPress={onPress}
    >
      <Text style={[styles.optionText, active && styles.activeOptionText]}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function ExploreFilterSheet({
  visible,
  onClose,
  selectedTime,
  selectedDifficulty,
  onTimeChange,
  onDifficultyChange,
  onReset,
}: ExploreFilterSheetProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={styles.sheet}>
          <View style={styles.handle} />

          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Filtros</Text>
              <Text style={styles.subtitle}>
                Encontra o que combina contigo.
              </Text>
            </View>

            <Pressable
              style={styles.closeButton}
              onPress={onClose}
              hitSlop={8}
            >
              <Ionicons name="close" size={18} color="#244C47" />
            </Pressable>
          </View>

          <Text style={styles.sectionTitle}>Tempo de preparação</Text>
          <View style={styles.optionsRow}>
            <Option
              label="Qualquer"
              active={selectedTime === "all"}
              onPress={() => onTimeChange("all")}
            />
            <Option
              label="Até 15 min"
              active={selectedTime === "15"}
              onPress={() => onTimeChange("15")}
            />
            <Option
              label="Até 30 min"
              active={selectedTime === "30"}
              onPress={() => onTimeChange("30")}
            />
          </View>

          <Text style={styles.sectionTitle}>Dificuldade</Text>
          <View style={styles.optionsRow}>
            <Option
              label="Qualquer"
              active={selectedDifficulty === "all"}
              onPress={() => onDifficultyChange("all")}
            />
            <Option
              label="Fácil"
              active={selectedDifficulty === "easy"}
              onPress={() => onDifficultyChange("easy")}
            />
            <Option
              label="Médio"
              active={selectedDifficulty === "medium"}
              onPress={() => onDifficultyChange("medium")}
            />
          </View>

          <View style={styles.actions}>
            <Pressable style={styles.resetButton} onPress={onReset}>
              <Text style={styles.resetText}>Limpar</Text>
            </Pressable>
            <Pressable style={styles.applyButton} onPress={onClose}>
              <Text style={styles.applyText}>Aplicar filtros</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(5,27,23,0.28)",
  },
  sheet: {
    paddingHorizontal: 21,
    paddingTop: 9,
    paddingBottom: 30,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    backgroundColor: "#F9FBF7",
  },
  handle: {
    alignSelf: "center",
    width: 38,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#C9D2CC",
    marginBottom: 18,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 20,
    color: "#082D31",
  },
  subtitle: {
    marginTop: 3,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 10,
    color: "#7C8584",
  },
  closeButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF2ED",
  },
  sectionTitle: {
    marginTop: 22,
    marginBottom: 9,
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 11,
    color: "#244C47",
  },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },
  option: {
    height: 36,
    paddingHorizontal: 14,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF2ED",
  },
  activeOption: {
    backgroundColor: "#075A50",
  },
  optionText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 8.5,
    color: "#55706A",
  },
  activeOptionText: {
    color: "#FFFFFF",
  },
  actions: {
    marginTop: 26,
    flexDirection: "row",
    gap: 8,
  },
  resetButton: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF2ED",
  },
  resetText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 10,
    color: "#48655F",
  },
  applyButton: {
    flex: 2,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#075A50",
  },
  applyText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 10,
    color: "#FFFFFF",
  },
});
