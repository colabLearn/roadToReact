import * as React from 'react'


  //Variable definition
  //const title = 'React'
  const welcome = {
    greeting: 'Hey',
    title: 'React',
  }

function App() {

  //You can do something in between
  return (
    
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <label htmlFor='search'> Search</label>
      <input id="search" type="text"></input>
    </div>
  );
  
}

export default App
