import React from 'react';

import Header from './components/header/header.component';
import HomePage from './pages/home/homePage.page';
import SignInPage from './pages/signIn_and_signUp/signIn_and_signUp.page';
import { BASE_URL } from "./constants"

import {Switch, Route, Redirect } from 'react-router-dom';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state ={
        currentUser: null
    };
  }

  callAPI() {
    fetch(BASE_URL).then(
        res => {console.log(res.body)}
    )
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.callAPI()
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route exact path = '/signin' render={()=> this.state.currentUser? (<Redirect to = '/'/>) : (<SignInPage/>)}/>
        </Switch>
      </div>
    )
  }
}
export default App;