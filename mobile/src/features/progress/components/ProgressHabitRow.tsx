import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = { label: string; value: string; progress: number; icon: string };

export default function ProgressHabitRow({ label, value, progress, icon }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.icon}><Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={13} color="#087C5B" /></View>
      <View style={styles.content}>
        <View style={styles.textRow}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
        <View style={styles.track}><View style={[styles.fill, { width: `${progress}%` }]} /></View>
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
 row:{flexDirection:"row",alignItems:"center",gap:7,marginBottom:8},
 icon:{width:24,height:24,borderRadius:12,backgroundColor:"#EDF5EC",alignItems:"center",justifyContent:"center"},
 content:{flex:1}, textRow:{flexDirection:"row",justifyContent:"space-between",marginBottom:3},
 label:{fontFamily:"PlusJakartaSans_500Medium",fontSize:7.3,color:"#36534E"},
 value:{fontFamily:"PlusJakartaSans_500Medium",fontSize:6.5,color:"#7B8985"},
 track:{height:4,borderRadius:2,backgroundColor:"#DDE8DF",overflow:"hidden"},
 fill:{height:"100%",borderRadius:2,backgroundColor:"#2D8C45"},
});
