import * as React from "react"
import { View } from "react-native"
import { User } from "../../../../../shared/model"
import styles from "./BusyIndicator.style"

export interface BusyIndicatorProps {
    whosBusy: User[]
    height: number
}

export const BusyIndicator = (props: BusyIndicatorProps): JSX.Element => {
    const circleSize = props.height / 1.7
    const circleBorderRadius = circleSize / 2
    return (
        <View style={[
            styles.bottomOuterView,
            {
                height: props.height,
                paddingBottom: 8
            }
        ]}>
            {props.whosBusy.map((obj: User) =>
                    <View
                        key={obj.id}
                        style={{
                            height: circleSize,
                            width: circleSize,
                            borderRadius: circleBorderRadius,
                            marginLeft: 2,
                            marginRight: 2,
                            backgroundColor: obj.colourIndicator
                        }}
                    />
                )
            }
        </View>
    )
}
