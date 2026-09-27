import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import AppLogo from "@/components/ui/AppLogo";
import { useAppFonts } from "@/components/ui/useAppFonts";
import HomeBottomNavigation from "@/features/home/components/HomeBottomNavigation";
import { navigationItems } from "@/features/home/data/homeData";
import {
  profileAccountItems,
  profileGoals,
  profileOtherItems,
  profilePreferences,
  profileUser,
} from "@/features/profile/data/profileData";

const COLORS = {
  ink: "#082D31",
  muted: "#7C8584",
  green: "#087C5B",
  softGreen: "#EAF5EE",
  line: "#E8EEEA",
  card: "rgba(255,255,255,0.86)",
};

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) return null;

  const bottom = Math.max(insets.bottom, 8) + 8;

  const showMessage = (title: string, message: string) => Alert.alert(title, message);

  return (
    <AppBackground
      source={require("@/assets/images/backgrounds/background_food_variation_one_white.png")}
      resizeMode="cover"
    >
      <View style={styles.backgroundWash} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: Math.max(insets.top, 8),
            paddingBottom: 108 + insets.bottom,
          },
        ]}
      >
        <View style={styles.content}>
          <View style={styles.topBar}>
            <AppLogo width={118} height={34} />
            <Pressable
              style={styles.notificationButton}
              onPress={() => showMessage("Notificações", "Não tens novas notificações por agora.")}
              hitSlop={8}
            >
              <Ionicons name="notifications-outline" size={18} color={COLORS.ink} />
              <View style={styles.notificationDot} />
            </Pressable>
          </View>

          <View style={styles.profileHero}>
            <View style={styles.avatarWrap}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={34} color={COLORS.green} />
              </View>
              <Pressable
                style={styles.cameraButton}
                onPress={() => showMessage("Foto de perfil", "Aqui poderás escolher uma nova fotografia.")}
                hitSlop={6}
              >
                <Ionicons name="camera-outline" size={12} color={COLORS.ink} />
              </Pressable>
            </View>

            <View style={styles.profileIntro}>
              <View style={styles.profileNameRow}>
                <Text style={styles.profileName}>{profileUser.name}</Text>
                <Pressable
                  style={styles.editProfileButton}
                  onPress={() => showMessage("Editar perfil", "Aqui poderás editar os teus dados pessoais.")}
                >
                  <Ionicons name="pencil-outline" size={11} color={COLORS.ink} />
                  <Text style={styles.editProfileText}>Editar perfil</Text>
                </Pressable>
              </View>
              <Text style={styles.profileHelper}>{profileUser.helper}</Text>
            </View>
          </View>

          <View style={styles.statsCard}>
            <ProfileStat value={String(profileUser.age)} label="Idade" icon="person-outline" />
            <View style={styles.statDivider} />
            <ProfileStat value={profileUser.height} label="Altura" icon="resize-outline" />
            <View style={styles.statDivider} />
            <ProfileStat value={profileUser.weight} label="Peso" icon="scale-outline" />
          </View>

          <SectionHeader
            title="As minhas preferências"
            actionLabel="Editar"
            onPress={() => showMessage("Preferências", "Aqui poderás ajustar as tuas preferências alimentares.")}
          />

          <View style={styles.preferenceGrid}>
            {profilePreferences.map((item) => (
              <Pressable
                key={item.id}
                style={styles.preferenceCard}
                onPress={() => showMessage(item.label, "Esta preferência poderá ser editada nesta secção.")}
              >
                <View style={[styles.preferenceIcon, { backgroundColor: item.backgroundColor }]}>
                  <Ionicons
                    name={item.icon as keyof typeof Ionicons.glyphMap}
                    size={16}
                    color={item.iconColor}
                  />
                </View>
                <Text style={styles.preferenceLabel} numberOfLines={2}>
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </View>

          <SectionHeader
            title="Os meus objetivos"
            actionLabel="Editar"
            onPress={() => showMessage("Objetivos", "Aqui poderás ajustar os teus objetivos.")}
          />

          <View style={styles.stack}>
            {profileGoals.map((goal) => (
              <Pressable
                key={goal.id}
                style={styles.goalCard}
                onPress={() => showMessage(goal.title, goal.subtitle)}
              >
                <View style={styles.goalIcon}>
                  <Ionicons
                    name={goal.icon as keyof typeof Ionicons.glyphMap}
                    size={17}
                    color={COLORS.green}
                  />
                </View>
                <View style={styles.goalCopy}>
                  <Text style={styles.goalTitle}>{goal.title}</Text>
                  <Text style={styles.goalSubtitle}>{goal.subtitle}</Text>
                </View>
                <Ionicons name="chevron-forward" size={15} color="#6E7B77" />
              </Pressable>
            ))}
          </View>

          <SectionHeader title="A minha conta" />

          <View style={styles.menuCard}>
            {profileAccountItems.map((item, index) => (
              <MenuRow
                key={item.id}
                label={item.label}
                icon={item.icon}
                divider={index < profileAccountItems.length - 1}
                onPress={() => showMessage(item.label, "Esta área está pronta para receber a sua funcionalidade.")}
              />
            ))}
          </View>

          <SectionHeader title="Outras opções" marginTop={15} />

          <View style={styles.menuCard}>
            {profileOtherItems.map((item, index) => (
              <MenuRow
                key={item.id}
                label={item.label}
                icon={item.icon}
                divider={index < profileOtherItems.length - 1}
                onPress={() => showMessage(item.label, "Esta área está pronta para receber a sua funcionalidade.")}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <HomeBottomNavigation items={navigationItems} bottom={bottom} />
    </AppBackground>
  );
}

function ProfileStat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <View style={styles.stat}>
      <Ionicons name={icon} size={16} color={COLORS.green} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function SectionHeader({
  title,
  actionLabel,
  onPress,
  marginTop = 15,
}: {
  title: string;
  actionLabel?: string;
  onPress?: () => void;
  marginTop?: number;
}) {
  return (
    <View style={[styles.sectionHeader, { marginTop }]}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {actionLabel && onPress ? (
        <Pressable onPress={onPress} hitSlop={6} style={styles.sectionAction}>
          <Text style={styles.sectionActionText}>{actionLabel}</Text>
          <Ionicons name="arrow-forward" size={12} color={COLORS.green} />
        </Pressable>
      ) : null}
    </View>
  );
}

function MenuRow({
  label,
  icon,
  divider,
  onPress,
}: {
  label: string;
  icon: string;
  divider: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.menuRow}>
      <View style={styles.menuIcon}>
        <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={15} color={COLORS.ink} />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
      <Ionicons name="chevron-forward" size={14} color="#6E7B77" />
      {divider ? <View style={styles.divider} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backgroundWash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(247,250,244,0.58)",
  },
  scrollContent: {
    width: "100%",
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 430,
    paddingHorizontal: 15,
  },
  topBar: {
    width: "100%",
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderWidth: 1,
    borderColor: "rgba(15,54,49,0.06)",
  },
  notificationDot: {
    position: "absolute",
    top: 6,
    right: 7,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E7493C",
  },
  profileHero: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    marginTop: 5,
  },
  avatarWrap: {
    width: 76,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#DDECE2",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.92)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#1C4C3D",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  cameraButton: {
    position: "absolute",
    right: -1,
    bottom: 2,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E4ECE7",
  },
  profileIntro: {
    flex: 1,
    minWidth: 0,
  },
  profileNameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 7,
  },
  profileName: {
    flex: 1,
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 22,
    lineHeight: 22,
    color: COLORS.ink,
  },
  editProfileButton: {
    height: 27,
    paddingHorizontal: 9,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.86)",
    borderWidth: 1,
    borderColor: "#E3EBE6",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  editProfileText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 11,
    color: COLORS.ink,
  },
  profileHelper: {
    marginTop: 4,
    maxWidth: 260,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 10.5,
    color: COLORS.muted,
  },
  statsCard: {
    marginTop: 10,
    width: "100%",
    minHeight: 68,
    borderRadius: 14,
    paddingHorizontal: 6,
    paddingVertical: 7,
    backgroundColor: COLORS.card,
    flexDirection: "row",
    alignItems: "center",
  },
  stat: {
    flex: 1,
    minWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  statValue: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 13,
    color: COLORS.ink,
  },
  statLabel: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 9,
    color: COLORS.muted,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: COLORS.line,
  },
  sectionHeader: {
    width: "100%",
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 15,
    color: COLORS.ink,
  },
  sectionAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  sectionActionText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 11,
    color: COLORS.green,
  },
  preferenceGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 7,
  },
  preferenceCard: {
    width: "23.8%",
    minHeight: 76,
    paddingHorizontal: 6,
    paddingVertical: 7,
    borderRadius: 11,
    backgroundColor: "rgba(255,255,255,0.82)",
    alignItems: "center",
    justifyContent: "center",
  },
  preferenceIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  preferenceLabel: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 9,
    lineHeight: 7.2,
    color: "#465A55",
    textAlign: "center",
  },
  stack: {
    width: "100%",
    gap: 7,
  },
  goalCard: {
    width: "100%",
    minHeight: 58,
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 8,
    backgroundColor: "rgba(238,247,239,0.92)",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  goalIcon: {
    width: 29,
    height: 29,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4F2E7",
  },
  goalCopy: {
    flex: 1,
    minWidth: 0,
  },
  goalTitle: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 12,
    color: COLORS.ink,
  },
  goalSubtitle: {
    marginTop: 2,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 9,
    color: COLORS.muted,
  },
  menuCard: {
    width: "100%",
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.83)",
  },
  menuRow: {
    minHeight: 48,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    position: "relative",
  },
  menuIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F2",
  },
  menuLabel: {
    flex: 1,
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 12,
    color: "#445752",
  },
  divider: {
    position: "absolute",
    left: 42,
    right: 10,
    bottom: 0,
    height: 1,
    backgroundColor: COLORS.line,
  },
});
