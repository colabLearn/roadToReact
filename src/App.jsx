//import * as React from 'react'

const list = [
  {
    title: 'Road To React',
  url: 'https://reactjs.org',
  author: 'Adetunji Adeniran',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },

  {
    title: 'Redux',
  url: 'https://react.js.org',
  author: 'Babatunde Adeniran',
  num_comments: 2,
  points: 4,
  objectID: 1,
  }

]

function App() {

  //You can do something in between
  return (
    
    <div>
      <h1>My Hacker Stories</h1>

     <Search />

      <hr />
      <List/>
    </div>
  );
  
}

function Search(){
  return(
     <div>
       <label htmlFor='search'> Search</label>
     <input id="search" type="text"></input>

     </div>

  )
}
function List (){
  return (
    <table>
    <tr>
        <th><strong>Title</strong></th>
        <th><strong>Author</strong></th>
        <th><strong>Num of Comments</strong></th>
        <th><strong>Points</strong></th>
      </tr>
      {list.map(function(item){
        return          (
            <tr key={item.objectID}>
            <td><a href={item.url}>{item.title}</a></td>
            <td>{item.author}</td>
            <td>{item.num_comments}</td>
            <td>{item.points}</td>
          </tr>
         
          /*</div><li key={item.objectID}>{item.title}</li>*/

        )  

      })}
    </table>
  )
}
export default App
