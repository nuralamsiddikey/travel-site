import './App.css';
import Top from './components/top/Top';
import About from './components/about/About';
import Service from './components/service/Service';
import Footer from './components/footer/Footer';
import Partner from './components/partner/Partner';

function App() {
  return (
    <div >
       <Top/>
       <About/>
      <Service />
      <Partner />
      <Footer />
    </div>
  );
}  

export default App;
