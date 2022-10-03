import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CustomMarker from "../../components/CustomMarker/CustomMarker";

import places from "../../../assets/data/feed";
import PostCarousel from "../../components/PostCarousel/PostCarousel";

const SearchResultsMap = () => {
  const width = useWindowDimensions().width;

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  //for syncing flatlist with map using ref and effect//

  const flatlist = useRef();
  const map=useRef();

const viewConfig=useRef({itemVisiblePercentThreshold:80})

const onViewChanged=useRef(({viewableItems})=>{
//viewableItems gives the item which is currently displayed on the screen//


if(viewableItems.length > 0){
    const selectedPlace=viewableItems[0].item;
    setSelectedPlaceId(selectedPlace.id)
}
})


  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({ index });

    

const selectedPlace=places[index];

const region={
    longitude:selectedPlace.coordinate.longitude,
    latitude:selectedPlace.coordinate.latitude,
    latitudeDelta:0.8,
    longitudeDelta:0.8,

}


//map references//
map.current.animateToRegion(region);


  }, [selectedPlaceId]);

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <MapView
      ref={map}
        provider={PROVIDER_GOOGLE}
        style={{ height: "100%", width: "100%" }}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => {
              setSelectedPlaceId(place.id);
            }}
          />
        ))}

        <CustomMarker />
      </MapView>

      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          data={places}
          ref={flatlist}
          renderItem={({ item }) => <PostCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          //to make the scroll smooth//
viewabilityConfig={viewConfig.current}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate="fast"
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;

const styles = StyleSheet.create({});
