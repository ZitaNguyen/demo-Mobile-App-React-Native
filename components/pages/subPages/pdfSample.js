import React, { Component } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import Pdf from 'react-native-pdf'

export default class PDFSample extends Component {
  static navigationOptions = { 
    title: 'PDF Sample', 
    headerStyle: {
      backgroundColor: '#53A2D8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true}

    return (
      <View style={styles.container}>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`)
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`)
          }}
          onError={(error) => {
            console.log(error)
          }}
          style={styles.pdf}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 15,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
  }
});