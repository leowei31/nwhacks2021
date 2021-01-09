import React from 'react';
import SignInPage from './pages/signIn_and_signUp/signIn_and_signUp.page';

import {Switch, Route } from 'react-router-dom';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state ={
        currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
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
        <Switch>
          <Route path = '/signin' component = {SignInPage}/>
        </Switch>
      </div>
    )
  }
}
export default App;