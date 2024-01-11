import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon, MagnifyingGlassCircleIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-screens';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-pink-200 " >
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
           
        <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-pink-200 mb-4 flex-row p-2 ml-4"
                >
                <ArrowLeftIcon size="20" color="black" />
                <Text className="px-4 text-base font-medium" size="40">My Expenses</Text>
                </TouchableOpacity>
                <View className='flex-row' style={{top:10,gap:15,left:85}}>
                <Image source={require('../assets/icons/symbol.png')}
                style={{width:25,height:25}}>
                </Image>
                <Image source={require('../assets/icons/active.png')}
                style={{width:25,height:25}}></Image>
                </View>
        </View>
        
      </SafeAreaView>
      <View className="flex-1 bg-slate-200 rounded-md px-1 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
      <Text className='px-3 py-2 text-base font-bold'>Add New Expense</Text>

        <View className='flex-row mt-1 bg-white py-2 mx-2 rounded-lg'>
          <View className='ml-4 mr-2 py-3 px-5 bg-pink-100 rounded-lg '>
            <Image source={require('../assets/icons/camera.png')} style={{height:35,width:35}}></Image>
          </View>
        <View className=' py-4 flex-row px-12 bg-slate-100 rounded-lg'>
            <Image source={require('../assets/icons/calender.png')} style={{height:25,width:25}}></Image>
              <Text className='ml-4 my-1 font-bold'>Date of Expense</Text>
        </View>
        </View>
      
        <View className='mt-3 bg-white py-3 mx-1 rounded-lg'>
        <Text className='font-bold text-base ml-4'>Expense Type</Text>
          <View className='flex-row mt-2'>
              <View className='ml-2 mr-2 py-3 px-5 bg-pink-100 rounded-lg'>
              <Text className='text-pink-900 font-bold'>Food</Text></View>
              <View className='ml-2 mr-2 py-3 px-5 bg-slate-100 rounded-lg'>
              <Text className='font-bold'>Travel</Text></View>
              <View className='ml-2 mr-2 py-3 px-5 bg-slate-100 rounded-lg'><Text className='font-bold'>Business</Text></View>
              <View className='ml-2 mr-2 py-3 px-5 bg-slate-100 rounded-lg'><Text className='font-bold'>Man</Text></View>
            </View>

            <Text className='font-bold text-base ml-4 mt-3'>Expense Amount</Text>
            <View className='ml-2 border-2 border-slate-300 mt-2 p-3 rounded-lg'>
            <Text className='text-grey font-bold'>Amount</Text></View>

            
            <Text className='font-bold text-base ml-4 mt-3'>Comment </Text>
            <View className='ml-1 border-2 border-slate-300 mt-2 p-3 rounded-lg'>
            <Text className='text-grey font-bold'>Comment reason</Text></View>

            
          </View>

          <Text className='font-bold ml-4 mt-2 text-base'>Status</Text>
          <View><Image style={{width:253,height:130}}
          source={require('../assets/icons/img.jpeg')}></Image></View>

          <View className='flex-row px-6 mt-14 justify-end'>
          <Text className='mx-6 pt-2'>Cancle</Text>
          <View className=' py-1 px-3 bg-pink-400 rounded-full'>
          <Text className='p-2 text-white font-bold'>submit</Text></View>
          </View>
      </View>
    </View>
  )
}
