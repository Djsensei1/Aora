import { useState } from 'react'
import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { icons } from '../constants'

const zoomIn = {
    0: {
        scale: 0.9
    },
    1: {
        scale: 1
    }
}

const zoomOut = {
    0: {
        scale: 1
    },
    1: {
        scale: 0.9
    }
}

const TrendingItem = ({ activeItem, item }) => {
    const [play, setPlay] = useState(false);

    console.log(activeItem.$id, item.$id)

    return (
        <Animatable.View
            className="mr-5"
            animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
            duration={500}
        >
            {play ? (
                <Text className="text-3xl text-white">Playing</Text>
            ) : (
                <TouchableOpacity className="relative justify-center items-center" activeOpacity={0.7} onPress={() => setPlay(true)}>
                    <ImageBackground 
                        source={{ uri: item.thumbnail }}
                        className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
                        resizeMode='cover'
                    />


                    <Image
                        source={icons.play}
                        className="w-12 h-12 absolute"
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            )}
        </Animatable.View>
    )
}

const Trending = ({ posts }) => {
const [activeItem, setActiveItem] = useState(posts[1]);

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <TrendingItem 
                    activeItem={activeItem}
                    item={item}
                />
            )}
            horizontal
            ListEmptyComponent={() => (
                <Text className="text-3xl text-white">No posts</Text>
            )}
        />
    )
}

export default Trending