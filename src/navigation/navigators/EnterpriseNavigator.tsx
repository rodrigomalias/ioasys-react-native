import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import EnterprisesContainer from "../../features/enterprises/EnterprisesContainer"
import EnterpriseContainer from "../../features/enterprise/EnterpriseContainer"
import { colors } from "../../colors"
import { translation } from "../../utils"

export type EnterpriseParams = {
    enterprises: undefined
    enterprise: {
        enterpriseName: string,
        enterpriseId: number,
    }
}

const EnterpriseStack = createStackNavigator<EnterpriseParams>()

export function EnterpriseNavigator() {
    return (
        <EnterpriseStack.Navigator>
            <EnterpriseStack.Screen
                name="enterprises"
                component={EnterprisesContainer}
                options={{
                    headerTitleAlign: "center",
                    title: `${translation("enterprise.plural")}`,
                    headerStyle: {
                        borderBottomColor: colors.black,
                        borderBottomWidth: 0.5,
                    }
                }}
            />
            <EnterpriseStack.Screen
                name="enterprise"
                component={EnterpriseContainer}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    title: route.params?.enterpriseName,
                    headerStyle: {
                        borderBottomColor: colors.black,
                        borderBottomWidth: 0.5,
                    }
                })}
            />
        </EnterpriseStack.Navigator>
    )
}