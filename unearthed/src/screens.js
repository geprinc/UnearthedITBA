import { PureComponent } from 'react';
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';

import BusinessOffer from './screens/createBusinessOffer'
import Chat from './screens/chat'
import Login from './screens/login';
import JobsList from './screens/jobList';
import JobOffer from './screens/jobOffer';
import ConversationList from './screens/conversationList';
import Profile from './screens/profile';
import { NavigationOptions } from './NavigationOptions';

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: NavigationOptions.login
  },
  Home: {
    screen: TabNavigator(
      {
        JobsList: {
          screen: JobsList,
          navigationOptions: NavigationOptions.jobsList
        },
        Profile: {
          screen: Profile,
          navigationOptions: NavigationOptions.profile
        },
        Conversations: {
          screen: ConversationList,
          navigationOptions: NavigationOptions.conversations
        }
      },
      {
        tabBarPosition: 'bottom',
        tabBarOptions: {
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          style: {
            backgroundColor: '#4348a9'
          }
        }
      }
    ),
    navigationOptions: NavigationOptions.tabs
  },
  JobOffer: {
    screen: JobOffer,
    navigationOptions: NavigationOptions.jobOffer
  },
  Chat: {
    screen: Chat,
    navigationOptions: NavigationOptions.jobOffer
  },
  BusinessOffer: {
    screen: BusinessOffer,
    navigationOptions: NavigationOptions.jobOffer
  },

});
