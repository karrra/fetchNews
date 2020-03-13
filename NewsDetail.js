import React from 'react'
import { WebView } from 'react-native-webview'


export default function NewsDetail({route, navigation}) {
  return (
    <WebView
        source={{ uri: route.params.url }}
    />
  )
}