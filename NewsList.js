import React from 'react'
import { StyleSheet, Text, View, FlatList, RefreshControl, TouchableWithoutFeedback } from 'react-native'
import moment from 'moment'
import { URL, APIKEY } from './const'

export default function NewsList({ navigation }) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchData = () => {
    setIsLoading(true)
    fetch(`${URL}?page-size=6&lang=en&api-key=${APIKEY}`)
    .then(res => res.json())
    .then(data => {
        setIsLoading(false)
        setData(data.response.results)
    })
    .catch(error => console.log(error))
  }

  const onPress = (url) => {
    navigation.navigate('Detail', {url: url})
  }

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => onPress(item.webUrl)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>
          {item.webTitle}
        </Text>
        <Text>{moment(item.webPublicationDate).fromNow()}</Text>
      </View>
    </TouchableWithoutFeedback>
  )

  const onRefresh = () => {
    fetchData()
  }

  React.useEffect(() => {
    fetchData()
  }, [navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  item: {
    flex: 1,
    margin: 40,
    height: 30,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 17,
    width: '100%'
  }
});