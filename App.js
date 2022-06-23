import React from 'react'
import { Node } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { CardItem } from './src/components/Carditem'

const img1 = 'https://dodopizza-a.akamaihd.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_292x292.jpeg'
const img2 = 'https://dodopizza-a.akamaihd.net/static/Img/Products/45e50d71297c411bbe1f37f506f9ab18_292x292.jpeg'
const img3 = 'https://dodopizza-a.akamaihd.net/static/Img/Products/103d94956de3424586764b1adeca5e68_292x292.jpeg'
const img4 = 'https://dodopizza-a.akamaihd.net/static/Img/Products/1e3e653d3e9b4b77ae0bdacf8827f6f6_292x292.jpeg'

const pizzaData = [
  {
    id: 1,
    name: 'Маргарита',
    price: 259,
    image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_292x292.jpeg'
  },
  {
    id: 2,
    name: 'Маргарита2',
    price: 250,
    image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_292x292.jpeg'
  },
  {
    id: 3,
    name: 'Маргарита3',
    price: 250,
    image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_292x292.jpeg'
  }
]

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      {/* <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} /> */}
      <View style={styles.container}>
        <Text style={styles.text}>Магазин пиццы</Text>
        <Text style={styles.textDes}>Некое описание {'\n'}длинною в 2 строки</Text>

        <View style={styles.imgContainer}>
          {pizzaData.map((pizza, index) => (
            <CardItem key={index} text={pizza.name} img={pizza.image} price={pizza.price} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 15
  },
  text: {
    fontSize: 24,
    fontWeight: '700'
  },
  textDes: {
    marginTop: 15,
    fontSize: 16,
    color: 'gray'
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  image: {
    width: '45%',
    height: 180,
    borderRadius: 4
  }
})

export default App
