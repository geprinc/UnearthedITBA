import { PureComponent } from 'react';
import { NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';

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
        tabBarPosition: 'bottom'
      }
    ),
    navigationOptions: NavigationOptions.tabs
  },
  JobOffer: {
    screen: JobOffer,
    navigationOptions: NavigationOptions.jobOffer
  }
});
