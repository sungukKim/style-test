import React from "react";
import { View, Text } from 'react-native';
import { Header, Contents, Footer } from "./components/Layout";
import ShadowBox from "./components/ShadowBox";
import { ViewStyles, textStyles } from "./style";

const App = () => {
    return (
        <View style={ViewStyles.container}>
            <ShadowBox />
        </View>
    );
};

export default App;