import {create} from 'zustand'; //create the store
import {produce} from 'immer'; // update the store
import {persist, createJSONStorage} from 'zustand/middleware'; //enables you to store your Zustand state in a storage
import useAsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      CartPrice: 0,
      FavoraiteList: [],
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
