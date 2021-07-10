// import logo from './logo.svg';
// import './App.css';
import data from '../data';

function App() {
  return (
    <>
   <Header/>
   <Hero/>
   <Articles/>
   <Footer/>
   </>
  );
}


function Header(){
  return(

    <div className = "header flex">
      <h4>Logo</h4>
      <ul className = "flex">
        <li>Home </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}


function Hero(){
  return(
    <img src = "https://images.unsplash.com/photo-1526451734058-ba0973bc958a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className = "hero-image" alt="" />
  )
 
}

function Articles(){
  return(
    <>
    <h3>Article</h3>
    <div className = "main">
      {data.map((article) => {
        console.log(article);
        <Article info =  {article} />
      })}
    </div>
    </>
  )
}

function Article(props){
  return(
    <>
    <div>
      <img src={props.info.urlToImage} alt ="" />
      <h2 className = "title-article">{props.info.title}</h2>
    </div>
    </>
  )
}


// [
//   {
//     author: 'Omkar Godbole',
//     title:
//       'Third Halving Turns Out to Be Non-Event for Bitcoin’s Price',
//     description:
//       "Bitcoin's price volatility has declined following the network's third mining reward halving event on Monday.",
//     url:
//       'https://www.coindesk.com/third-blockchain-halving-turns-out-non-event-bitcoins-price',
//     urlToImage:
//       'https://static.coindesk.com/wp-content/uploads/2020/05/btc-chart-may-12-1200x628.png',
//     publishedAt: '2020-05-12T11:40:34Z',
//     content:
//       "Bitcoin's price volatility has declined following the network's third mining reward halving event on Monday.  \r\nThe reward per block mined on bitcoin's blockchain was reduced to 6.25 BTC from 12.5 BTC at 19:23 UTC, when the cryptocurrency was trading near $8,… [+3792 chars]",
//   }
// ]


function Footer(){
  return(
    <div className = "footer flex">
      <h4>@c 2020 All rights Reserved</h4>
      <ul className = "flex">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
  )
}
export default App;
