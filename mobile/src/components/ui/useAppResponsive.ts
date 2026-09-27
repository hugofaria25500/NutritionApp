import { useWindowDimensions } from "react-native";
import { contentWidth,responsiveSize } from "./theme";
export function useAppResponsive(){
 const {width,height,fontScale}=useWindowDimensions();
 return {width,height,fontScale,contentWidth:contentWidth(width),size:(value:number)=>responsiveSize(value,width)};
}
