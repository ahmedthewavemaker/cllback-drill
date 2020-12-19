import React, { Component } from 'react';
import List from './List';
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
  return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let { [keyToOmit]: _, ...rest } = obj;
  return rest;
}

// Example
const objectWithKVPs = {
  key: 'value',
  foo: 'foo value',
  bar: 'bar value',
  abc: { nested: 'object' }
}

// To remove the foo key value pair
const newObjectWithKVPs = omit(objectWithKVPs, 'foo');

function handleAddKard(){
  console.log('card added')
}

function handleRemoveKard(){
  console.log('card removed')
}

function App(props) {


  const { store } = props
  

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {store.lists.map((item, i) => (
          <List
            key={i}
            header={item.header}
            cards={item.cardIds.map(id => store.allCards[id])} 
            onAddItem= {props.handleAddKard()}
            onRemoveItem={props.handleRemoveKard()} />
                        
        ))}

      </div>
    </main>
  )
}

App.defaultProps = {
  store: {
    lists: [],
    allCards: {},
  }
};

export default App;
