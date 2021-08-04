import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Container/Header/header';
import Footer from './Components/Container/Footer/footer'
import Page_1 from './Components/Pages/page_1/page_1';
import Page_2 from './Components/Pages/page_2/page_2';
import Page_8 from './Components/Pages/page_8/page_8';
import Page_7 from './Components/Pages/page_7/page_7';
import Page_6 from './Components/Pages/page_6/page_6';
import Page_4 from './Components/Pages/page_4/page_4';
import Page_3 from './Components/Pages/page_3/page_3';
import Page_5 from './Components/Pages/page_5/page_5';

function App() {
  return (
    <div className="App">
     <Header/>
      <div>
        <Switch>
          <Route path = '/' exact>
             <Page_1/>
          </Route>

          <Route path = '/ОНАС' exact>
             <Page_2/>
          </Route>

          <Route path = '/ПРОИЗВОДСТВО' exact>
             <Page_3/>
          </Route>

          <Route path = '/УСЛУГИ' exact>
             <Page_4 />
          </Route>

          <Route path = '/ПРОДУКЦИЯ' exact>
            <Page_5/>
          </Route>

          <Route path = '/КОНСТРУКТОР' exact>
             <Page_6/>
          </Route>

          <Route path = '/НОВОСТИ' exact>
            <Page_7/>
          </Route>

          <Route path = '/КОНТАКТЫ' exact>
             <Page_8/>
          </Route>
        </Switch>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
