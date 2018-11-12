// profile/actions.ts
import { ActionTree } from 'vuex';
import { ProfileState, User } from './types';
import { RootState } from '../types';


export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    setTimeout(() => {
      const resultData: User = {
        firstName: 'Serhii',
        lastName: 'Silov',
        email: 'serhiisilov@gmail.com',
        phone: '+380945284318',
      };
      commit('profileLoaded', resultData);
    }, 2000);
  },
};
