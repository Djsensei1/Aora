import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({ posts }) => {
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <Text className="text-3xl text-white">{item.id}</Text>
            )}
            horizontal
            ListEmptyComponent={() => (
                <Text className="text-3xl text-white">No posts</Text>
            )}
        />
    )
}

export default Trending