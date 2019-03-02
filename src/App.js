import React, { Component, useState } from 'react';
import './App.css';
import Radium, { StyleRoot }from 'radium';
import Person from './Person/Person.js';

// const app = propos =>{
//   const [personState, setPersonState] = useState({
//     person:[
//       {name: 'cxy', age: 28},
//       {name: 'szy', age: 39},
//       {name: 'jr', age: 18}
//     ],
//     otherState: 'some other value'
//   });
//     const  switchName = () =>{
//         console.log('Was Clicked!');
//         //Dont do this this.state.person[0].name = 'Maxiiiiii';
//         setPersonState({
//             person:[
//                 {name: 'cxy1', age: 228},
//                 {name: 'szy1', age: 239},
//                 {name: 'jr1', age: 218}
//             ],
//             otherState: personState.otherState
//         })
//     };
//   return (
//       <div className="App">       {/*jsx code*/}
//         <h1>hi, i am a react app</h1>
//         <button onClick={switchName}>Switch Name</button>
//         <Person name={personState.person[0].name} age={personState.person[0].age}/>
//         <Person name={personState.person[1].name} age={personState.person[1].age}> My hobbies: eating</Person>
//         <Person name={personState.person[2].name} age={personState.person[2].age}/>
//       </div>
//   )
// }
//
class App extends Component {
  state = {
    person: [
      {id: 'cxy617',name: 'cxy', age: 28},
      {id: 'szycxy617',name: 'szy', age: 39},
      {id: 'szy617',name: 'jr', age: 18}
    ],
    otherState: 'some other value',
      showPerson: false
  }
  switchName = (event, index) => {
      const personIndex = this.state.person.findIndex(p => {
          return p.id === index;
      });
      const pson = {...this.state.person[personIndex]};
      pson.name = event.target.value;
      const person = [...this.state.person];
      person[personIndex] = pson;

      this.setState({person: person});
  }

    toggleshowName = () =>{
      const doesShow = this.state.showPerson;
        this.setState({
        showPerson: !doesShow
        })
    }
    deletePerson = (personIndex) =>{
        const persons = [...this.state.person];
        persons.splice(personIndex, 1);
        this.setState({person:persons});
    }

  render() {
      const style={
          backgroundColor:"green",
          border:'2px solid #eee',
          cursor:'pointer',
          ':hover':{
              backgroundColor:"lightgreen",
              color: 'yellow'
          }
      }
      let person = null;
      if(this.state.showPerson){
          person = (
              <StyleRoot>
              <div>
                  {this.state.person.map((p, index) =>{
                        return <Person click={()=>this.deletePerson(index)} name={p.name} age={p.age}
                        key={p.id}
                        changed={(event) => this.switchName(event, p.id)}/>
                  })
                  }
                  {/*<Person name={this.state.person[0].name} age={this.state.person[0].age}/>*/}
                  {/*<Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchName.bind(this, "cxy!")} changed={this.nameChanged}> My hobbies: eating</Person>*/}
                  {/*<Person name={this.state.person[2].name} age={this.state.person[2].age}/>*/}
              </div></StyleRoot>
          );
          style.backgroundColor="red";
          style[':hover'] = {
              backgroundColor:"pink",
                  color: 'yellow'
          }

      }
      const classes = [];
      if(this.state.person.length <= 2){
          classes.push("red");
      }
      if(this.state.person.length <= 1){
          classes.push("bold");
      }

    return (
      <div className="App">       {/*jsx code*/}
        <h1>hi, i am a react app</h1>
          <p className={classes.join(' ')}>This item's color will change!</p>
        <button style={style} onClick={this.toggleshowName}>Toggle Persons</button>   {/*inefficient */}
          {person}
      </div>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'I \' a react app'));
  }
}

export default Radium(App);
