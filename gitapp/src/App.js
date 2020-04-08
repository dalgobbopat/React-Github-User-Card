import React from 'react';
import Card from './components/Card.js';
import axios from 'axios';
import styled from 'styled-components';

const Header = styled.h1 `
text-align: center;
font-size: 7rem;

`
const Follow = styled.h2 `
text-align: center;
font-size: 5rem;

`


class App extends React.Component{
  constructor(){
    super();
    this.state = {
    user: '',
    followers: []
    };
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/dalgobbopat')
    .then(res1=>{
      console.log(res1.data)
      axios
      .get(res1.data.followers_url)
      .then(res2=>{
        console.log(res2.data)
        this.setState({
          user: res1.data,
          followers: res2.data
        })
      })
    })
  }

  render(){
    return(
      <div className = 'main div'>
        <Header>Github Usercards</Header>
        <Card 
          userImg = {this.state.user.avatar_url}
          name = {this.state.user.name}
          username = {this.state.user.login}
          profile = {this.state.user.url}
          followers = {this.state.user.followers}
          following = {this.state.user.following}
          bio = {this.state.user.bio}
          />
          <Follow>My Followers</Follow>
        {
        this.state.followers.map(user=>{
          return <Card 
          userImg = {user.avatar_url}
          name = {user.name}
          username = {user.login}
          profile = {user.url}
          followers = {user.followers}
          following = {user.following}
          bio = {user.bio}
          />
        })
        }
      </div>
    )
  }
}
export default App; 