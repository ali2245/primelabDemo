import React from 'react'
import {
  ActivityIndicator, View, StyleSheet
} from 'react-native'

function LoadingSpinner(props) {

  if (!props.isLoading) {
    return null
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={'white'}
        size={'large'}
      />
    </View>
  )
}

export default LoadingSpinner

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center'
  }
})