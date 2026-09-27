export const COLORS = {
  ink:"#082D31", green:"#087C5B", greenStrong:"#168653", greenDark:"#075A50",
  greenSoft:"#EAF3E8", text:"#234B46", muted:"#7C8584", mutedLight:"#98A19E",
  border:"#E1E4DF", line:"#E6ECE8", surface:"rgba(255,255,255,0.86)",
  surfaceStrong:"rgba(255,255,255,0.94)", track:"#DCE8DE", white:"#FFFFFF",
};
export const SPACING={xs:4,sm:8,md:12,lg:16,xl:20,xxl:24,xxxl:32};
export const RADIUS={sm:8,md:12,lg:16,xl:22,pill:999};
export const TYPOGRAPHY={
  display:{fontSize:30,lineHeight:36},h1:{fontSize:24,lineHeight:30},h2:{fontSize:18,lineHeight:24},
  h3:{fontSize:16,lineHeight:21},body:{fontSize:14,lineHeight:20},bodyMedium:{fontSize:14,lineHeight:19},
  bodySmall:{fontSize:12,lineHeight:17},label:{fontSize:11,lineHeight:15},caption:{fontSize:10,lineHeight:14},
  button:{fontSize:14,lineHeight:19},
};
export const LAYOUT={baseWidth:390,maxContentWidth:430,horizontalPadding:20,bottomNavigationWidth:"94%" as const,bottomNavigationHeight:68};
export const clamp=(value:number,min:number,max:number)=>Math.min(Math.max(value,min),max);
export const responsiveScale=(width:number)=>clamp(width/LAYOUT.baseWidth,0.94,1.06);
export const responsiveSize=(value:number,width:number)=>Math.round(value*responsiveScale(width));
export const contentWidth=(width:number)=>Math.min(Math.max(width-LAYOUT.horizontalPadding*2,0),LAYOUT.maxContentWidth);
