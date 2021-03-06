import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    topOuterView: ViewStyle
    selectedColor: ViewStyle
    circleView: ViewStyle
    textStyleWeekday: TextStyle
    textStyleWeekend: TextStyle
}

export default StyleSheet.create({
    topOuterView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    selectedColor: {
        backgroundColor: "#FF1493"
    },
    circleView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyleWeekday: {
        color: "#323A48",
        fontWeight: "500",
        fontSize: 14
    },
    textStyleWeekend: {
        color: "#768398",
        fontWeight: "400",
        fontSize: 14
    }
})
