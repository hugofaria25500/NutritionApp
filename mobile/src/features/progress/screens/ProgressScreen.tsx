import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import AppLogo from "@/components/ui/AppLogo";
import { useAppFonts } from "@/components/ui/useAppFonts";
import HomeBottomNavigation from "@/features/home/components/HomeBottomNavigation";
import { navigationItems } from "@/features/home/data/homeData";
import ProgressHabitRow from "@/features/progress/components/ProgressHabitRow";
import ProgressMetricCard from "@/features/progress/components/ProgressMetricCard";
import { habits, insights, progressCopy, progressMetrics, weeklyCalories } from "@/features/progress/data/progressData";

const COLORS = { ink:"#082D31", muted:"#7C8584", green:"#2D8C45", darkGreen:"#087C5B" };

export default function ProgressScreen() {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useAppFonts();
  const [period, setPeriod] = useState<"Resumo"|"Nutrição"|"Hábitos"|"Peso">("Resumo");
  const [completedHabits, setCompletedHabits] = useState<string[]>([]);
  if (!fontsLoaded) return null;
  const bottom = Math.max(insets.bottom,8)+8;

  const toggleHabit = (id:string) => setCompletedHabits(current => current.includes(id) ? current.filter(item=>item!==id) : [...current,id]);

  const changePeriod = (next: typeof period) => {
    setPeriod(next);
    if (next !== "Resumo") Alert.alert(next, `Aqui vais acompanhar os teus dados de ${next.toLowerCase()}.`);
  };

  return (
    <AppBackground source={require("@/assets/images/backgrounds/background_food_variation_one_white.png")} resizeMode="cover">
      <View style={styles.wash} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.scroll,{paddingTop:Math.max(insets.top,8),paddingBottom:112+insets.bottom}]}>
        <View style={styles.content}>
          <View style={styles.header}>
            <AppLogo width={118} height={36} />
            <Pressable style={styles.notification} onPress={()=>Alert.alert("Notificações","Não tens novas notificações por agora.")}>
              <Ionicons name="notifications-outline" size={19} color={COLORS.ink}/>
              <View style={styles.dot}/>
            </Pressable>
          </View>

          <View style={styles.hero}>
            <Text style={styles.title}>O teu <Text style={styles.accent}>progresso</Text></Text>
            <Text style={styles.subtitle}>{progressCopy.subtitle}</Text>
          </View>

          <View style={styles.tabs}>
            {(["Resumo","Nutrição","Hábitos","Peso"] as const).map(item=>(
              <Pressable key={item} style={[styles.tab,item===period&&styles.activeTab]} onPress={()=>changePeriod(item)}>
                <Text style={[styles.tabText,item===period&&styles.activeTabText]}>{item}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.todayCard}>
            <View style={styles.cardHeader}>
              <View style={styles.headingLine}><Ionicons name="calendar-outline" size={12} color={COLORS.darkGreen}/><Text style={styles.cardTitle}>Hoje</Text></View>
              <Ionicons name="chevron-forward" size={14} color="#5E726D"/>
            </View>
            <View style={styles.todayContent}>
              <View style={styles.calorieRing}>
                <View style={styles.ringInner}><Text style={styles.ringNumber}>1 250</Text><Text style={styles.ringUnit}>/ 1 800 kcal</Text></View>
              </View>
              <View style={styles.metricList}>
                {progressMetrics.map(metric=><ProgressMetricCard key={metric.label} {...metric}/>)}
              </View>
            </View>
          </View>

          <View style={styles.grid}>
            <View style={styles.smallCard}>
              <View style={styles.smallHeader}><View style={styles.headingLine}><Ionicons name="bar-chart-outline" size={12} color={COLORS.darkGreen}/><Text style={styles.smallTitle}>Evolução semanal</Text></View><Ionicons name="chevron-forward" size={13} color="#60736E"/></View>
              <Text style={styles.bigMetric}>{progressCopy.calorieAverage}</Text>
              <View style={styles.changeRow}><Text style={styles.change}>{progressCopy.calorieChange}</Text><Text style={styles.caption}>vs. semana anterior</Text></View>
              <View style={styles.chart}>{weeklyCalories.map((item,index)=><View key={item.day} style={styles.barWrap}><View style={[styles.bar,{height:14+(item.value-1500)/35},index===3&&styles.activeBar]}/><Text style={styles.barLabel}>{item.day}</Text></View>)}</View>
            </View>

            <View style={styles.smallCard}>
              <View style={styles.smallHeader}><View style={styles.headingLine}><Ionicons name="locate-outline" size={12} color={COLORS.darkGreen}/><Text style={styles.smallTitle}>Objetivo</Text></View><Ionicons name="chevron-forward" size={13} color="#60736E"/></View>
              <Text style={styles.goalTitle}>Défice calórico moderado</Text>
              <Text style={styles.goalSub}>-300 kcal/dia</Text>
              <View style={styles.goalTrack}><View style={[styles.fill,{width:"55%"}]}/></View>
              <Text style={styles.caption}>3 de 8 semanas</Text>
              <View style={styles.goalBadge}><Ionicons name="flag-outline" size={11} color="#D49B20"/><Text style={styles.badgeText}>Estás no bom caminho!</Text></View>
            </View>

            <View style={styles.smallCard}>
              <View style={styles.smallHeader}><View style={styles.headingLine}><Ionicons name="scale-outline" size={12} color={COLORS.darkGreen}/><Text style={styles.smallTitle}>Peso</Text></View><Ionicons name="chevron-forward" size={13} color="#60736E"/></View>
              <Text style={styles.bigMetric}>{progressCopy.weight}</Text>
              <Text style={styles.change}>{progressCopy.weightChange}</Text>
              <View style={styles.lineChart}><View style={styles.lineBase}/>{[20,18,22,17,13,15,9,7].map((h,i)=><View key={i} style={[styles.linePoint,{left:`${i*12}%`,bottom:h}]} />)}</View>
              <View style={styles.chartDates}><Text style={styles.caption}>1 Set</Text><Text style={styles.caption}>8 Set</Text><Text style={styles.caption}>15 Set</Text><Text style={styles.caption}>22 Set</Text></View>
            </View>

            <View style={styles.smallCard}>
              <View style={styles.smallHeader}><View style={styles.headingLine}><Ionicons name="leaf-outline" size={12} color={COLORS.darkGreen}/><Text style={styles.smallTitle}>Hábitos</Text></View><Ionicons name="chevron-forward" size={13} color="#60736E"/></View>
              {habits.map(habit=><Pressable key={habit.id} onPress={()=>toggleHabit(habit.id)}><ProgressHabitRow {...habit} progress={completedHabits.includes(habit.id)?100:habit.progress}/></Pressable>)}
            </View>
          </View>

          <View style={styles.insightHeader}><Text style={styles.sectionTitle}>Insights personalizados</Text><Pressable onPress={()=>Alert.alert("Insights","Todos os teus insights serão apresentados aqui.")}><Text style={styles.seeAll}>Ver todos →</Text></Pressable></View>
          <View style={styles.insights}>
            {insights.map(item=><View key={item.id} style={styles.insight}><View style={styles.insightIcon}><Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={14} color={COLORS.darkGreen}/></View><Text style={styles.insightTitle} numberOfLines={2}>{item.title}</Text><Text style={styles.insightDetail} numberOfLines={2}>{item.detail}</Text></View>)}
          </View>
        </View>
      </ScrollView>
      <HomeBottomNavigation items={navigationItems} bottom={bottom}/>
    </AppBackground>
  );
}

const styles=StyleSheet.create({
 wash:{...StyleSheet.absoluteFillObject,backgroundColor:"rgba(247,250,244,0.58)"},
 scroll:{width:"100%",alignItems:"center"},
 content:{width:"100%",maxWidth:430,paddingHorizontal:15},
 header:{width:"100%",height:42,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},
 notification:{width:36,height:36,borderRadius:18,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255,.84)",borderWidth:1,borderColor:"rgba(15,54,49,.07)"},
 dot:{position:"absolute",top:7,right:8,width:6,height:6,borderRadius:3,backgroundColor:"#E7493C"},
 hero:{marginTop:10,marginBottom:10},title:{fontFamily:"PlusJakartaSans_700Bold",fontSize:28,lineHeight:33,color:COLORS.ink},accent:{color:COLORS.darkGreen},subtitle:{marginTop:2,maxWidth:330,fontFamily:"PlusJakartaSans_400Regular",fontSize:9.5,lineHeight:13,color:COLORS.muted},
 tabs:{width:"100%",flexDirection:"row",gap:6,marginBottom:8},tab:{flex:1,height:28,borderRadius:14,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255,.55)"},activeTab:{backgroundColor:COLORS.darkGreen},tabText:{fontFamily:"PlusJakartaSans_600SemiBold",fontSize:7.5,color:"#63736F"},activeTabText:{color:"#FFF"},
 todayCard:{width:"100%",padding:10,borderRadius:15,backgroundColor:"rgba(237,245,236,.92)"},cardHeader:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},headingLine:{flexDirection:"row",alignItems:"center",gap:5},cardTitle:{fontFamily:"PlusJakartaSans_700Bold",fontSize:8.5,color:COLORS.ink},todayContent:{flexDirection:"row",alignItems:"center",gap:10,marginTop:7},calorieRing:{width:78,height:78,borderRadius:39,borderWidth:8,borderColor:"#D4E8D8",borderLeftColor:COLORS.darkGreen,borderBottomColor:COLORS.darkGreen,alignItems:"center",justifyContent:"center"},ringInner:{alignItems:"center"},ringNumber:{fontFamily:"PlusJakartaSans_700Bold",fontSize:14,color:COLORS.ink},ringUnit:{fontFamily:"PlusJakartaSans_400Regular",fontSize:5.5,color:COLORS.muted},metricList:{flex:1,gap:5},
grid:{width:"100%",flexDirection:"row",flexWrap:"wrap",gap:7,marginTop:8},smallCard:{width:"48.8%",minHeight:108,padding:9,borderRadius:13,backgroundColor:"rgba(255,255,255,.78)",borderWidth:1,borderColor:"rgba(20,59,51,.05)"},smallHeader:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},smallTitle:{fontFamily:"PlusJakartaSans_700Bold",fontSize:7.8,color:COLORS.ink},bigMetric:{marginTop:8,fontFamily:"PlusJakartaSans_700Bold",fontSize:13,color:COLORS.ink},changeRow:{flexDirection:"row",alignItems:"center",gap:5,marginTop:2},change:{fontFamily:"PlusJakartaSans_600SemiBold",fontSize:7,color:"#2D8C45"},caption:{fontFamily:"PlusJakartaSans_400Regular",fontSize:5.5,color:"#7B8985"},chart:{height:45,marginTop:7,flexDirection:"row",alignItems:"flex-end",justifyContent:"space-between",paddingHorizontal:3},barWrap:{height:"100%",alignItems:"center",justifyContent:"flex-end",gap:2},bar:{width:6,borderRadius:3,backgroundColor:"#CFE5D3"},activeBar:{backgroundColor:COLORS.darkGreen},barLabel:{fontFamily:"PlusJakartaSans_400Regular",fontSize:5,color:"#8A9693"},goalTitle:{marginTop:7,fontFamily:"PlusJakartaSans_600SemiBold",fontSize:7,color:"#34514C"},goalSub:{marginTop:2,fontFamily:"PlusJakartaSans_400Regular",fontSize:6,color:COLORS.muted},goalTrack:{height:4,borderRadius:2,backgroundColor:"#DCE8DE",overflow:"hidden",marginTop:7},fill:{height:"100%",backgroundColor:COLORS.darkGreen,borderRadius:2},goalBadge:{marginTop:7,padding:5,borderRadius:7,backgroundColor:"#F8F1D9",flexDirection:"row",gap:4,alignItems:"center"},badgeText:{flex:1,fontFamily:"PlusJakartaSans_500Medium",fontSize:5.3,color:"#806B2D"},lineChart:{height:43,marginTop:6,borderBottomWidth:1,borderBottomColor:"#DCE5E0",position:"relative"},lineBase:{position:"absolute",left:"5%",right:"5%",top:26,height:1,backgroundColor:"#DCE5E0"},linePoint:{position:"absolute",width:6,height:6,borderRadius:3,backgroundColor:COLORS.darkGreen},chartDates:{flexDirection:"row",justifyContent:"space-between",marginTop:3},insightHeader:{marginTop:10,marginBottom:6,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},sectionTitle:{fontFamily:"PlusJakartaSans_700Bold",fontSize:10,color:COLORS.ink},seeAll:{fontFamily:"PlusJakartaSans_600SemiBold",fontSize:6.5,color:COLORS.darkGreen},insights:{flexDirection:"row",gap:6,paddingBottom:4},insight:{flex:1,minHeight:73,padding:7,borderRadius:11,backgroundColor:"rgba(255,255,255,.78)"},insightIcon:{width:22,height:22,borderRadius:11,backgroundColor:"#EDF5EC",alignItems:"center",justifyContent:"center",marginBottom:4},insightTitle:{fontFamily:"PlusJakartaSans_700Bold",fontSize:6.5,lineHeight:8,color:COLORS.ink},insightDetail:{marginTop:3,fontFamily:"PlusJakartaSans_400Regular",fontSize:5.5,lineHeight:7,color:COLORS.muted}
});
