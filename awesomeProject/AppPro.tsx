import react from "react";
import{
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from "react-native";

function AppPro(): JSX.Element{
    const isDarkMode=useColorScheme()==="dark";
    return (
        <View style={styles.container}>
            <Text style={styles.whiteText}>Hello Android World</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
    },
    whiteText:{
        color:"#ffffff",
        fontSize: 25,
        fontWeight: "bold",
    }
    ,
    darkText:{
        color:"#000000",
    }
})
export default AppPro;