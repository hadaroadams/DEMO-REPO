import './App.css';
import Body from './component/Body';
import Items from './component/Items';
import Navbar from './component/Navbar';
import comp from "./Assets/images/image-retro-pcs.jpg"
import key from   "./Assets/images/image-top-laptops.jpg"
import game  from './Assets/images/image-gaming-growth.jpg';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <div className='item-cont'>
      <Items image={comp} num={'01'} title={'Reviving Retro PCs'} header={'What happens when old PCs are given mordern updates'}/>
      <Items image={key} num={'02'} title={'Top ten Laptops Of 2022'} header={'Our best picks for various needs and badgets'}/>
      <Items image={game} num={'03'} title={'The Growth Of Gaming'} header={'How the pandamic has spark fresh opportunities'}/>
      </div>
    </div>
  );
}

export default App;
