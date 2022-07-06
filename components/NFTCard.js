import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

import { CircleButton, RectButton } from './Button';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.rad,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View 
        style={{ 
          width: "100%", 
          height: 250 
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.rad,
            borderTopRightRadius: SIZES.rad,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={15} top={15} />

      </View>

      <SubInfo />    
      
      <View style={{ width:"100%", padding:10 }}>
          <NFTTitle 
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />
      </View>  

      <View style={{  
        marginTop:5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        }}
      >
        <EthPrice price={data.price} />
        <RectButton 
          right={15} 
          bottom={10}
          minWidth={120}
          fontSize={SIZES.font}
          handlePress={() => navigation.navigate("Details", { data })}
        />

      </View>  

    </View>
  )
}

export default NFTCard