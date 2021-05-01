import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'CASILLERO') {
        iconName = focused
        ? 'box-open'
        : 'box';
      } else if (route.name === 'INFO') {
        iconName = focused
        ? 'bars'
        : 'bars';
      } else if (route.name === 'AEREO') {
        iconName = focused
        ? 'plane'
        : 'plane';
      }else if (route.name === 'PERFIL') {
        iconName = focused
        ? 'user-alt'
        : 'user-alt';
      }
return <FontAwesome5 name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="CASILLERO" component={TabAScreen} />
        <Tab.Screen name="AEREO" component={aereo} />
        <Tab.Screen name="PERFIL" component={perfil} />
        <Tab.Screen name="INFO" component={TabBScreen} />
       
    </Tab.Navigator>
  );
}



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>No New Notifications!</Text>
      <Button 
      onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
  );
}


const Stack = createStackNavigator();
function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CASILLERO" component={TabADetailsScreen}  options={{
          title: 'CASILLERO',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            
          },
        }}/>

      <Stack.Screen name="TabA Details" component={Details}  options={{
          title: 'Detalle',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

    </Stack.Navigator>
  );
}

/////////////////////////////////////////////////////////////////////////////////


function TabADetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center', backgroundColor: 'white' }}>
      <Text>
        Welcome to TabA pagessss!
      </Text>
      <Button 
      onPress={() => navigation.navigate('TabA Details')}
      title="Go to TabA Details"
      />
    </View>
  );
}


/////////////////////////////////////////////////////////////////////////////////

function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        TabA Details here!
      </Text>
    </View>
  );
}

//////////////////////////////////////////////////////////////

function TabBScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to INFO page!
      </Text>
    </View>
  );
}

///////////////////////////////////////////////////////////////////

function aereo() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to aereo page!
      </Text>
    </View>
  );
}

//////////////////////////////////////////////////////////////////////
function perfil() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to perfil page!
      </Text>
    </View>
  );
}

//////////////////////////////////////////////////////////////////////

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}