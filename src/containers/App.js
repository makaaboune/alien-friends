import React , {Component} from 'react'; //React.Component
import {connect} from 'react-redux';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import Search from '../components/Search';
import './App.css';
import {setSearchField, requestAliens} from '../actions';
//=> Action : dispatched into reducer function(Pure func)
//=> Reducers : Will Take the state & change it in the store
//=> Store : Store updated (One source of truth)
//          => React component listen to store and make changes

// What state I want to listen to and send it as a props
const mapStateToProps = state => {
  return {
    searchField: state.searchAliens.searchField,
    aliens: state.requestAliens.aliens,
    isPending: state.requestAliens.isPending,
    error: state.requestAliens.error
  }
}
// Trigger actions
// What propos I should listen to that are actions.

const mapDispatchToProps = dispatch=> {
  return {
    onSearchChange: (event) => {dispatch(setSearchField(event.target.value))},
    onRequestAliens: () => { dispatch(requestAliens()) }
  }
}

class App extends Component {

/*
==> Used before Adding Redux

  constructor(){
    super()
    // App Component have 2 state ( aliens & searchField)
    this.state = {
      aliens : [],
      //searchField : ''
    }
  }
==>  Run this func when it's a change in search input
==>  Update the state searchField to whatever we type

    onSearchChange = (event) => {
     this.setState({searchField : event.target.value})
  }
==> componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
*/ 
  componentDidMount(){
    this.props.onRequestAliens();
    //console.log(this.props.store.getState())
    // ==> Fetch API do AJAX call after component mounted
    // ==> Get response witch was a promise and convert it to Js
    // ==> Get the users object
    /*
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { 
          return response.json()
        })
        .then( users => {
          this.setState({aliens:users})
        })
    */
  }
  render (){
    // Comunicate to CardList
    // Filter alien state
    const {searchField, onSearchChange, aliens, isPending, error} = this.props;

    const filtredAliens = aliens.filter(alien => {
      return alien.name.toLowerCase()
      .includes(searchField.toLowerCase())
    })

      return filtredAliens.length === 0 ?

       ( <div className="tc">
          <h1>My Aliens Friends</h1>
          <Search searchProps={onSearchChange}/>
          <Scroll>
            <h1>Ooops !! No Alien Found !</h1>
          </Scroll>
        </div>
      )
    :
       (
          <div className="tc">
            <h1>My Aliens Friends</h1>
            <Search searchProps={onSearchChange}/>
            <Scroll>
              <CardList aliens={filtredAliens}/>
            </Scroll>
          </div>
        )
          }
                            }
                            
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
