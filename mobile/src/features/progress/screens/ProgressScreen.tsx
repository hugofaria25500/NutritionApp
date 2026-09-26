import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppBackground from "@/components/ui/AppBackground";
import AppLogo from "@/components/ui/AppLogo";
import { useAppFonts } from "@/components/ui/useAppFonts";
import HomeBottomNavigation from "@/features/home/components/HomeBottomNavigation";
import { navigationItems } from "@/features/home/data/homeData";
import { calorieSummary, insights, macronutrients, progressCopy, weeklyCalories, weightEntries, weightGoal, weightSummary } from "@/features/progress/data/progressData";

const COLORS = { ink:"#082D31", muted:"#7C8584", green:"#2D8C45", darkGreen:"#087C5B" };

export default function ProgressScreen() {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useAppFonts();
    if (!fontsLoaded) return null;
  const bottom = Math.max(insets.bottom,8)+8;

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

          <View style={styles.calorieCard}>
            <View style={styles.sectionTop}>
              <View style={styles.headingLine}>
                <Ionicons name="bar-chart-outline" size={15} color={COLORS.darkGreen}/>
                <Text style={styles.sectionCardTitle}>Ingestão de calorias</Text>
              </View>
              <Pressable onPress={()=>Alert.alert("Ingestão de calorias","Aqui poderás consultar a evolução detalhada da tua ingestão.")}>
                <Text style={styles.moreText}>Ver mais →</Text>
              </Pressable>
            </View>
            <Text style={styles.mainValue}>{calorieSummary.current.toLocaleString("pt-PT")} {calorieSummary.unit}</Text>
            <Text style={styles.mainCaption}>Média diária esta semana</Text>
            <View style={styles.calorieChart}>
              <View style={styles.caloriePlot}>
                {[33.33, 66.67].map((position) => (
                  <View key={position} style={[styles.calorieGridLine, { top: `${position}%` }]} />
                ))}

                {weeklyCalories.map((item, index) => {
                  const x = (index / (weeklyCalories.length - 1)) * 100;
                  const y = 100 - (item.value / 1800) * 100;
                  return (
                    <View
                      key={`area-${item.label}`}
                      style={[
                        styles.calorieAreaBar,
                        {
                          left: `${x}%`,
                          top: `${y}%`,
                          height: `${100 - y}%`,
                        },
                      ]}
                    />
                  );
                })}

                {weeklyCalories.map((item, index) => {
                  if (index === weeklyCalories.length - 1) return null;
                  const next = weeklyCalories[index + 1];
                  const x = (index / (weeklyCalories.length - 1)) * 100;
                  const nextX = ((index + 1) / (weeklyCalories.length - 1)) * 100;
                  const y = 100 - (item.value / 1800) * 100;
                  const nextY = 100 - (next.value / 1800) * 100;
                  const midX = (x + nextX) / 2;
                  const midY = (y + nextY) / 2;
                  const dx = nextX - x;
                  const dy = nextY - y;
                  const length = Math.sqrt(dx * dx + dy * dy);
                  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                  return (
                    <View
                      key={`segment-${item.label}`}
                      style={[
                        styles.calorieLineSegment,
                        {
                          left: `${midX}%`,
                          top: `${midY}%`,
                          width: `${length}%`,
                          transform: [{ rotate: `${angle}deg` }],
                        },
                      ]}
                    />
                  );
                })}

                {weeklyCalories.map((item, index) => {
                  const x = (index / (weeklyCalories.length - 1)) * 100;
                  const y = 100 - (item.value / 1800) * 100;

                  return (
                    <View
                      key={item.label}
                      style={[
                        styles.caloriePointWrap,
                        { left: `${x}%`, top: `${y}%` },
                      ]}
                    >
                      <View style={styles.caloriePoint} />
                      {index === 3 && (
                        <View style={styles.calorieTooltip}>
                          <Text style={styles.calorieTooltipText}>{item.value}</Text>
                        </View>
                      )}
                    </View>
                  );
                })}

                {[1800, 1200, 600, 0].map((value) => (
                  <Text
                    key={value}
                    style={[
                      styles.calorieAxisLabel,
                      { top: `${100 - (value / 1800) * 100}%` },
                    ]}
                  >
                    {value}
                  </Text>
                ))}
              </View>

              <View style={styles.calorieXAxis}>
                {weeklyCalories.map((item, index) => (
                  <View key={item.label} style={styles.calorieXTick}>
                    <Text style={[styles.calorieDay, index === 3 && styles.calorieDayActive]}>{item.label}</Text>
                    <Text style={[styles.calorieDate, index === 3 && styles.calorieDateActive]}>{item.date}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.macroCard}>
            <View style={styles.sectionTop}>
              <View style={styles.headingLine}>
                <Ionicons name="pie-chart-outline" size={15} color={COLORS.darkGreen}/>
                <Text style={styles.sectionCardTitle}>Distribuição de macronutrientes</Text>
              </View>
              <Text style={styles.macroToday}>Hoje</Text>
            </View>
            <View style={styles.macroTotalBar}>
              <View style={[styles.macroSegment,{flex:45,backgroundColor:"#35A65A"}]}/>
              <View style={[styles.macroSegment,{flex:30,backgroundColor:"#FFC34D"}]}/>
              <View style={[styles.macroSegment,{flex:25,backgroundColor:"#FF8054"}]}/>
            </View>
            <View style={styles.macroCards}>
              {macronutrients.map((metric,index)=>(

                <View key={metric.label} style={styles.macroItem}>
                  <View style={[styles.macroIcon,{backgroundColor:`${metric.color}18`}]}>
                    <Ionicons name={metric.icon as keyof typeof Ionicons.glyphMap} size={14} color={metric.color}/>
                  </View>
                  <View style={styles.macroInfo}>
                    <Text style={styles.macroName}>{metric.label}</Text>
                    <Text style={styles.macroPercent}>{metric.percentage}%</Text>
                    <Text style={styles.macroAmount}>{metric.current} / {metric.target} {metric.unit}</Text>
                  </View>
                  <View style={styles.macroMiniTrack}><View style={[styles.macroMiniFill,{width:`${metric.progress}%`,backgroundColor:metric.color}]}/></View>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.twoColumnGrid}>
            <View style={styles.halfCard}>
              <View style={styles.sectionTop}>
                <View style={styles.headingLine}><Ionicons name="scale-outline" size={14} color={COLORS.darkGreen}/><Text style={styles.sectionCardTitle}>Peso</Text></View>
                <Pressable onPress={()=>Alert.alert("Peso","Aqui poderás consultar o histórico completo de pesagens.")}><Text style={styles.moreText}>Ver mais →</Text></Pressable>
              </View>
              <Text style={styles.halfValue}>{weightSummary.current.toFixed(1).replace(".", ",")} {weightSummary.unit}</Text>
              <Text style={styles.change}>{weightSummary.change.toFixed(1).replace(".", ",")} {weightSummary.unit} {weightSummary.changeLabel}</Text>
              <View style={styles.miniWeightChart}>
                <View style={styles.miniChartLine}/>
                {weightEntries.slice(-6).map((point,i)=>(
                  <View key={point.day} style={[styles.miniWeightPoint,{left:`${(i/5)*100}%`,bottom:8 + ((point.value - 68) / 3) * 32}]}>
                    <View style={styles.weightPoint}/>
                  </View>
                ))}
                <View style={styles.weightBubble}><Text style={styles.weightBubbleText}>{weightSummary.current.toFixed(1).replace(".", ",")}</Text></View>
              </View>
              <View style={styles.axisRow}><Text style={styles.axisText}>1 Set</Text><Text style={styles.axisText}>8 Set</Text><Text style={styles.axisText}>15 Set</Text><Text style={styles.axisText}>22 Set</Text></View>
            </View>

            <View style={styles.halfCard}>
              <View style={styles.sectionTop}>
                <View style={styles.headingLine}><Ionicons name="locate-outline" size={14} color={COLORS.darkGreen}/><Text style={styles.sectionCardTitle}>Objetivo</Text></View>
                <Ionicons name="chevron-forward" size={14} color="#60736E"/>
              </View>
              <Text style={styles.goalBig}>{weightGoal.label}</Text>
              <Text style={styles.goalProgress}><Text style={styles.change}>{weightGoal.achieved.toFixed(1).replace(".", ",")} kg</Text> de {weightGoal.total} kg</Text>
              <View style={styles.goalTrack}><View style={[styles.fill,{width:`${(weightGoal.achieved / weightGoal.total) * 100}%`}]}/></View>
              <Text style={styles.goalPercent}>{Math.round((weightGoal.achieved / weightGoal.total) * 100)}%</Text>
              <View style={styles.goalStats}>
                <View><Text style={styles.axisText}>Peso atual</Text><Text style={styles.goalStatValue}>{weightGoal.current.toFixed(1).replace(".", ",")} kg</Text></View>
                <View><Text style={styles.axisText}>Peso objetivo</Text><Text style={styles.goalStatValue}>{weightGoal.target.toFixed(1).replace(".", ",")} kg</Text></View>
              </View>
              <View style={styles.goalFooter}><Ionicons name="flag-outline" size={14} color={COLORS.darkGreen}/><View><Text style={styles.goalFooterTitle}>Faltam {weightGoal.remainingWeeks} semanas</Text><Text style={styles.axisText}>Mantém o ritmo!</Text></View></View>
            </View>
          </View>

          <View style={styles.insightHeader}>
            <Text style={styles.sectionTitle}>Insight da semana</Text>
          </View>
          <View style={styles.featuredInsight}>
            <View style={styles.featuredInsightIcon}><Ionicons name="bulb-outline" size={19} color="#D49B20"/></View>
            <View style={styles.insightText}>
              <Text style={styles.featuredInsightTitle}>Tens comido mais proteína!</Text>
              <Text style={styles.featuredInsightDetail}>A tua média de proteína aumentou 18% esta semana e estás mais próximo do teu objetivo diário.</Text>
            </View>
            <Ionicons name="chevron-forward" size={15} color="#60736E"/>
          </View>
          <View style={styles.insights}>
            {insights.slice(1).map(item=>(

              <View key={item.id} style={styles.insight}>
                <View style={styles.insightIcon}>
                  <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={14} color={COLORS.darkGreen}/>
                </View>
                <View style={styles.insightText}>
                  <Text style={styles.insightTitle} numberOfLines={2}>{item.title}</Text>
                  <Text style={styles.insightDetail} numberOfLines={2}>{item.detail}</Text>
                </View>
              </View>
            ))}
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
 content:{width:"100%",maxWidth:430,paddingHorizontal:14},
 header:{width:"100%",height:42,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},
 notification:{width:36,height:36,borderRadius:18,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255,.84)",borderWidth:1,borderColor:"rgba(15,54,49,.07)"},
 dot:{position:"absolute",top:7,right:8,width:6,height:6,borderRadius:3,backgroundColor:"#E7493C"},
 hero:{marginTop:10,marginBottom:12},title:{fontFamily:"PlusJakartaSans_700Bold",fontSize:28,lineHeight:33,color:COLORS.ink},accent:{color:COLORS.darkGreen},subtitle:{marginTop:2,maxWidth:340,fontFamily:"PlusJakartaSans_400Regular",fontSize:9.5,lineHeight:13,color:COLORS.muted},
 sectionTop:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},headingLine:{flexDirection:"row",alignItems:"center",gap:6},sectionCardTitle:{fontFamily:"PlusJakartaSans_700Bold",fontSize:9.5,color:COLORS.ink},moreText:{fontFamily:"PlusJakartaSans_600SemiBold",fontSize:7.5,color:COLORS.darkGreen},
 calorieCard:{width:"100%",minHeight:166,padding:11,borderRadius:15,backgroundColor:"rgba(255,255,255,.84)"},mainValue:{marginTop:8,fontFamily:"PlusJakartaSans_700Bold",fontSize:20,color:COLORS.ink},mainCaption:{marginTop:1,fontFamily:"PlusJakartaSans_400Regular",fontSize:7.5,color:COLORS.muted},
 calorieChart:{height:96,marginTop:7,position:"relative"},caloriePlot:{height:70,marginRight:28,position:"relative",overflow:"visible"},calorieGridLine:{position:"absolute",left:0,right:0,height:1,backgroundColor:"#E6ECE8"},calorieAreaBar:{position:"absolute",width:"16.66%",backgroundColor:"rgba(45,140,69,0.08)"},calorieLineSegment:{position:"absolute",height:1.5,backgroundColor:COLORS.darkGreen,transformOrigin:"center center"},caloriePointWrap:{position:"absolute",width:8,height:8,marginLeft:-4,marginTop:-4,alignItems:"center",justifyContent:"center",zIndex:3},caloriePoint:{width:7,height:7,borderRadius:4,backgroundColor:COLORS.darkGreen},calorieTooltip:{position:"absolute",bottom:10,left:-14,minWidth:39,paddingHorizontal:6,paddingVertical:4,borderRadius:6,backgroundColor:COLORS.ink,alignItems:"center"},calorieTooltipText:{fontFamily:"PlusJakartaSans_700Bold",fontSize:6.5,color:"#FFFFFF"},calorieAxisLabel:{position:"absolute",right:-25,transform:[{translateY:-3}],fontFamily:"PlusJakartaSans_400Regular",fontSize:5.5,color:"#7C8584"},calorieXAxis:{height:24,marginRight:28,marginTop:1,flexDirection:"row",justifyContent:"space-between"},calorieXTick:{width:24,alignItems:"center"},calorieDay:{fontFamily:"PlusJakartaSans_500Medium",fontSize:6.5,color:"#657570",lineHeight:8},calorieDayActive:{fontFamily:"PlusJakartaSans_700Bold",color:COLORS.ink},calorieDate:{fontFamily:"PlusJakartaSans_400Regular",fontSize:5.5,color:"#8A9693",lineHeight:7},calorieDateActive:{fontFamily:"PlusJakartaSans_600SemiBold",color:COLORS.ink},
macroCard:{width:"100%",minHeight:151,marginTop:8,padding:11,borderRadius:15,backgroundColor:"rgba(255,255,255,.84)"},macroToday:{fontFamily:"PlusJakartaSans_500Medium",fontSize:7,color:COLORS.muted},macroTotalBar:{height:9,borderRadius:5,overflow:"hidden",flexDirection:"row",marginTop:11,backgroundColor:"#E7ECE8"},macroSegment:{height:"100%"},macroCards:{flexDirection:"row",gap:7,marginTop:11},macroItem:{flex:1,minWidth:0},macroIcon:{width:26,height:26,borderRadius:13,alignItems:"center",justifyContent:"center",marginBottom:5},macroInfo:{minHeight:32},macroName:{fontFamily:"PlusJakartaSans_600SemiBold",fontSize:7.5,color:"#526762"},macroPercent:{fontFamily:"PlusJakartaSans_700Bold",fontSize:12,color:COLORS.ink,marginTop:1},macroAmount:{fontFamily:"PlusJakartaSans_400Regular",fontSize:6.5,color:COLORS.muted,marginTop:1},macroMiniTrack:{height:5,borderRadius:3,backgroundColor:"#E7ECE8",overflow:"hidden",marginTop:5},macroMiniFill:{height:"100%",borderRadius:3},
twoColumnGrid:{width:"100%",flexDirection:"row",gap:8,marginTop:8},halfCard:{flex:1,minHeight:178,padding:11,borderRadius:15,backgroundColor:"rgba(255,255,255,.84)"},halfValue:{marginTop:9,fontFamily:"PlusJakartaSans_700Bold",fontSize:18,color:COLORS.ink},goalBig:{marginTop:10,fontFamily:"PlusJakartaSans_700Bold",fontSize:12,color:COLORS.ink},goalProgress:{marginTop:2,fontFamily:"PlusJakartaSans_400Regular",fontSize:8,color:COLORS.muted},goalTrack:{height:6,borderRadius:3,backgroundColor:"#DCE8DE",overflow:"hidden",marginTop:7},fill:{height:"100%",backgroundColor:COLORS.darkGreen,borderRadius:3},goalPercent:{alignSelf:"flex-end",marginTop:2,fontFamily:"PlusJakartaSans_600SemiBold",fontSize:7,color:"#657570"},goalStats:{marginTop:9,flexDirection:"row",justifyContent:"space-between"},goalStatValue:{fontFamily:"PlusJakartaSans_600SemiBold",fontSize:8,color:COLORS.ink,marginTop:2},goalFooter:{marginTop:9,padding:7,borderRadius:9,backgroundColor:"#EDF5EC",flexDirection:"row",alignItems:"center",gap:7},goalFooterTitle:{fontFamily:"PlusJakartaSans_600SemiBold",fontSize:7,color:COLORS.ink},axisRow:{marginTop:4,flexDirection:"row",justifyContent:"space-between"},axisText:{fontFamily:"PlusJakartaSans_400Regular",fontSize:5.5,color:"#7D8B87"},
change:{fontFamily:"PlusJakartaSans_600SemiBold",fontSize:7.5,color:"#2D8C45"},miniWeightChart:{height:72,marginTop:7,position:"relative",borderBottomWidth:1,borderBottomColor:"#E2EAE5"},miniChartLine:{position:"absolute",left:0,right:0,bottom:27,height:1,backgroundColor:"#E5ECE7"},miniWeightPoint:{position:"absolute",width:7,height:7,borderRadius:4,backgroundColor:COLORS.darkGreen,transform:[{translateX:-3.5}]},weightBubble:{position:"absolute",right:0,bottom:35,paddingHorizontal:5,paddingVertical:3,borderRadius:5,backgroundColor:COLORS.ink},weightBubbleText:{fontFamily:"PlusJakartaSans_600SemiBold",fontSize:6,color:"#FFF"},
insightHeader:{marginTop:12,marginBottom:6},sectionTitle:{fontFamily:"PlusJakartaSans_700Bold",fontSize:10,color:COLORS.ink},featuredInsight:{width:"100%",minHeight:76,padding:10,borderRadius:13,backgroundColor:"rgba(255,255,255,.84)",flexDirection:"row",alignItems:"center",gap:9},featuredInsightIcon:{width:34,height:34,borderRadius:17,backgroundColor:"#FFF3D8",alignItems:"center",justifyContent:"center"},featuredInsightTitle:{fontFamily:"PlusJakartaSans_700Bold",fontSize:9,color:COLORS.ink},featuredInsightDetail:{marginTop:3,fontFamily:"PlusJakartaSans_400Regular",fontSize:7,color:COLORS.muted,lineHeight:9},insightText:{flex:1},insights:{flexDirection:"column",gap:6,paddingTop:6,paddingBottom:4},insight:{width:"100%",minHeight:55,paddingHorizontal:10,paddingVertical:8,borderRadius:11,backgroundColor:"rgba(255,255,255,.72)",flexDirection:"row",alignItems:"center",gap:9},insightIcon:{width:28,height:28,borderRadius:14,backgroundColor:"#EDF5EC",alignItems:"center",justifyContent:"center"},insightTitle:{fontFamily:"PlusJakartaSans_700Bold",fontSize:8,color:COLORS.ink},insightDetail:{marginTop:2,fontFamily:"PlusJakartaSans_400Regular",fontSize:6.5,lineHeight:8,color:COLORS.muted}
});