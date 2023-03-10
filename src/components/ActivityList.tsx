import {
  AvatarTile,
  KutteyTile,
  LakadbaggaTile,
  ValviTile,
  VedTile,
} from "@assets";
import { tw } from "@lib";
import { Image } from "@rneui/themed";
import React from "react";
import { View, Text, FlatList } from "react-native";

import { IActivity } from "./types";

const movieTiles: IActivity[] = [
  {
    id: "avatar",
    imgSrc: AvatarTile,
    title: "Avatar: The Way of Water",
  },
  {
    id: "kuttey",
    imgSrc: KutteyTile,
    title: "Kuttey",
  },
  {
    id: "lakkadbagga",
    imgSrc: LakadbaggaTile,
    title: "Lakadbaggha",
  },

  {
    id: "valvi",
    imgSrc: ValviTile,
    title: "Vaalvi",
  },
  {
    id: "ved",
    imgSrc: VedTile,
    title: "Ved",
  },
];
const ActivityTile = (activityDetail: IActivity) => (
  <View style={tw`h-full w-30 mr-2 flex-col`}>
    <Image
      style={tw`h-50 w-auto rounded-lg`}
      resizeMode="contain"
      source={activityDetail.imgSrc}
    />
    <View style={tw`px-1`}>
      <Text
        style={tw`flex-wrap font-roboto-regular text-sm max-h-12 h-auto`}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {activityDetail.title}
      </Text>
      {activityDetail?.description && (
        <Text
          style={tw`font-roboto-regular text-slate-500 text-sm`}
          numberOfLines={1}
        >
          {activityDetail.description}
        </Text>
      )}
      {activityDetail?.additionalInfo && (
        <Text
          style={tw`font-roboto-regular text-slate-500 text-xs`}
          numberOfLines={1}
        >
          {activityDetail.additionalInfo}
        </Text>
      )}
    </View>
  </View>
);
export const ActivityList = () => {
  return (
    <FlatList
      horizontal
      data={movieTiles}
      showsHorizontalScrollIndicator={false}
      style={tw`h-auto mt-4`}
      renderItem={({ item: movie }) => (
        <ActivityTile key={movie.id} {...movie} />
      )}
    />
  );
};
