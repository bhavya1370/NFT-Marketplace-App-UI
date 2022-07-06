import { View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { COLORS, NFTData } from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
  const [nftData, setnftData] = React.useState(NFTData);

  const Search = (value) => {
    if(!value.length) return setnftData(NFTData);

    const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredData.length) {
      setnftData(filteredData);
    }
    else{
      setnftData(NFTData);
    }
  }

  return (
    <SafeAreaView style={{ flex:1 }}>
      <FocusedStatusBar backgroundColor={COLORS.dark}/>
      <View style={{ flex:1 }}>
        <View styles={{ zIndex:0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            KeyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={Search}/>}         
          />
        </View>

        <View 
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
            <View 
             style={{ height: 450, backgroundColor: COLORS.orange, }}  />
            <View style={{ flex: 1, backgroundColor: COLORS.red }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home