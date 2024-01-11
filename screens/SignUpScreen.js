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
      <ScrollView>
      <View className="form space-y-2">
      <View>
      <Image source={require('../assets/icons/1.jpg')}
      style={{width:400,height:120,top:5}} ></Image>
      </View>
      <View>
      <Text className='px-3 py-3 text-base font-bold'>Reimbursement History</Text>
      </View>
      <View>
      <Image source={require('../assets/icons/2.jpg')}
      style={{width:350,height:145,top:1}} >
      </Image></View>
      <View className='flex-row'><Text className='px-3 py-3 text-base font-bold'>Unclaimed Expenses</Text>
      <ArrowRightIcon size="20" style={{top:13,left:150}} color="black" />
      </View>
      <View>
      <Image source={require('../assets/icons/3.jpg')}
      style={{width:350,height:250,top:1}}></Image>
      </View>

      <TouchableOpacity
      className="py-3 w-32 mb-8 items-center bg-purple-800 rounded-full "
      style={{left:110,top:5}} onPress={()=> navigation.navigate('expe')}
      >
      <Text className="font-xl font-bold text-center text-white" >
      Add New Expense
      </Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      <View className='bg-slate-300  '>
      <View className='flex-row m-2 text mx-4 space-x-12'>
      <View style={{flexDirection: 'column'}}>
      <Image style={{height:30,width:30}} source={require('../assets/icons/home.png')}></Image>
      <Text className='text-base font-bold'>Home</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Image style={{height:30,width:30}} source={require('../assets/icons/space.png')}></Image>
      <Text className='text-base font-bold'>Space</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Image style={{height:30,width:30}} source={require('../assets/icons/team.png')}></Image>
      <Text className='text-base font-bold'>Team</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Image style={{height:30,width:30}} source={require('../assets/icons/tick.png')}></Image>
      <Text className='text-base font-bold'>Approval</Text>
      </View>
      </View>
      </View>


      
      </View>
    </View>
  )
}



// <Text className="text-xl text-gray-700 font-bold text-center py-5">
// Or
// </Text>
// <View className="flex-row justify-center space-x-12">
// <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
// <Image source={require('../assets/icons/google.png')} 
// className="w-10 h-10" />
// </TouchableOpacity>
// <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
// <Image source={require('../assets/icons/apple.png')} 
// className="w-10 h-10" />
// </TouchableOpacity>
// <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
// <Image source={require('../assets/icons/facebook.png')} 
// className="w-10 h-10" />
// </TouchableOpacity>
// </View>
// <View className="flex-row justify-center mt-7">
// <Text className="text-gray-500 font-semibold">Already have an account?</Text>
// <TouchableOpacity >
// <Text className="font-semibold text-yellow-500"> Login</Text>
// </TouchableOpacity>
// </View>