import * as React from 'react'


  //Variable definition
  const title = 'React'

function App() {

  //You can do something in between
  return (
    
    <div>
      <h1>Hello {title}</h1>

      <label htmlFor='search'> Search</label>
      <input id="search" type="text"></input>
    </div>
  );
  
}

export default App
