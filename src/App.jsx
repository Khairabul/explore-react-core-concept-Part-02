
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'


function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('button 2 clicked')
  }
  function addToFive(num){
    alert(num+5)
  }
  return (
    <>     
      <h3> React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter> 
      <button onClick={handleClick}>Click Here</button>
      <button onClick={handleClick2}>Click Here 2</button>
      <button onClick={()=>{alert('button 3 clicked')}}>Click Here 3</button>
      <button onClick={()=>(addToFive(5))}>Add To Five</button>
    </>
  )
}
export default App
