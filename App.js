import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import IndexScreen from "./screens/IndexScreen";
import {createContext} from "react";
import {Provider} from "./context/BlogContext"
import {CommentProvider} from "./context/lastCode";
import HomeScreen from "./screens/HomeScreen";
import ShowScreen from "./screens/ShowScreen";
import CreateScreen from "./screens/CreateScreen";
import AllBlogsScreen from "./screens/AllBlogsScreen";
import {Feather} from "@expo/vector-icons";
import EditScreen from "./screens/EditScreen";

const Stack = createNativeStackNavigator();


export default function App() {
    return (

        <Provider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"index"} component={IndexScreen}
                                  // options={{
                                  //     title: "Index Screen",
                                  //     headerBackTitle: "Back",
                                  //     // headerStyle: { backgroundColor: 'lightblue' },
                                  //     headerTintColor: '#1E0342',
                                  //     headerTitleAlign: "center",
                                  //     headerRight:()=>{
                                  //         return(
                                  //             <Button
                                  //                 onPress={() => navigation.navigate('Create')}
                                  //                 title="+"
                                  //                 color="#000"
                                  //             />
                                  //         )
                                  //
                                  //     }
                                  //
                                  // }}
                        options={({navigation})=>({

                            title: "Index Screen",
                            headerBackTitle: "Back",
                            headerTintColor: '#1E0342',
                            headerTitleAlign: "center",
                                // headerStyle: { backgroundColor: 'lightblue' },
                            headerRight:()=>{
                                return(
                                    <TouchableOpacity  onPress={() => navigation.navigate('create')}>
                                        <Feather name={"plus"} size={30}/>
                                    </TouchableOpacity>
                            )

                            },

                        })}
                    />

                    <Stack.Screen name={"home"} component={HomeScreen}
                                  options={{
                                      title: "HomeScreen",
                                      headerBackTitle: "Back",
                                      headerStyle: { backgroundColor: 'lightblue' },
                                      headerTintColor: '#e84c4c',
                                      headerTitleAlign: "center"

                                  }}
                    />
                    <Stack.Screen name={"show"} component={ShowScreen}
                                  options={({navigation,route})=>({
                                      title: "Show Screen",
                                      headerBackTitle: "Back",
                                      headerStyle: { backgroundColor: '#fff' },
                                      headerTintColor: '#2F0F5D',
                                      headerTitleAlign: "center",
                                      headerRight:()=>{
                                          return(
                                              <TouchableOpacity onPress={()=> navigation.navigate("edit",{blogId:route.params.blogId})}>
                                                  <Feather name={"edit"} size={20} color={"#2F0F5D"}/>
                                              </TouchableOpacity>
                                          )
                                      }
                                  })}
                    />
                    <Stack.Screen name={"all"} component={AllBlogsScreen}
                                  options={{
                                      title: "Show Screen",
                                      headerBackTitle: "Back",
                                      headerStyle: { backgroundColor: 'lightblue' },
                                      headerTintColor: '#e84c4c',
                                      headerTitleAlign: "center"

                                  }}
                    />

                    <Stack.Screen name={"create"} component={CreateScreen}
                                  options={{
                                      title: "Create Screen",
                                      headerBackTitle: "Back",
                                      headerStyle: { backgroundColor: "#f6f5f5" },
                                      headerTintColor: '#071952',
                                      headerTitleAlign: "center"

                                  }}
                    />
                    <Stack.Screen name={"edit"} component={EditScreen}
                                  options={{
                                      title: "Edit Screen",
                                      headerBackTitle: "Back",
                                      headerStyle: { backgroundColor: 'lightblue' },
                                      headerTintColor: '#e84c4c',
                                      headerTitleAlign: "center"

                                  }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
