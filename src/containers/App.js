import React , {Component} from 'react'; //React.Component
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import Search from '../components/Search';
import './App.css';

class App extends Component {
  constructor(){
    super()
    // App Component have 2 state ( aliens & searchField)
    this.state = {
      aliens : [],
      searchField : ''
    }
  }
  // run this func when it's a change in search input
  // and update the state searchField to whatever we type
  onSearchChange = (event) => {
    this.setState({searchField : event.target.value})
  }
  //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
  componentDidMount(){
    //fetch API do AJAX call after component mounted
    //get response witch was a promise and convert it to Js
    // get the users object
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {return response.json()}).then(users=> {this.setState({aliens:users})})
  }
  render (){
    // Now we comunicate to CardList
    // we want to filter alien state
    const filtredAliens = this.state.aliens.filter(alien => {
      return alien.name.toLowerCase().includes(this.state.searchField.toLowerCase())

    })

    if (filtredAliens.length === 0) {

      return (
        <div className="tc">
          <h1>My Aliens Friends</h1>
          <Search searchProps={this.onSearchChange}/>
          <Scroll>
            <h1>Ooops !! No Alien Found !</h1>
          </Scroll>
        </div>

      )

    } else {

      return (

          <div className="tc">
            <h1>My Aliens Friends</h1>
            <Search searchProps={this.onSearchChange}/>
            <Scroll>
              <CardList aliens={filtredAliens }/>
            </Scroll>
          </div>



            )

    }


          }
                            }

export default App;
