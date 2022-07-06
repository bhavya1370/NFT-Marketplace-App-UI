import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

import Icons from 'react-native-vector-icons/MaterialIcons';

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.orange,
        padding: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ 
            width: 160, 
            height: 60,
            fontSize: 40,
            fontFamily: FONTS.bold,
            color: COLORS.white,
          }}
        >
          NFTbro
        </Text>

        <View style={{marginVertical: SIZES.font }}>
        <Image
          source={assets.logo} 
          resizeMode="contain"
          style={{ width: 100, height: 100 }}
        />

        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: 18,
            color: COLORS.white,
          }}
        >
          Welcome Bro 🤟
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: 22,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s find masterpiece Art
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.white,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            borderRadius:15,
          }}
        >
          <Icons name="search" color={COLORS.grey} size={25} />

          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
