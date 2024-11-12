import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.css'


 
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import './startbootstrap.css';
import Dashboard from './Dashbord';
import User from './User';
import { BrowserRouter,Routes,Route,Link, HashRouter} from "react-router-dom";
import Product from './Product';
import Createuser from './CreateUser';
import ViewUser from './ViewUser';
import Portal from './Portal';
import Page from './Page';
import Pageview from './Pageview';
import PageviewUser from './PageUser';
import PageUser from './PageUser';
import Useredit from './Useredit';



function App() {
  return (
    <HashRouter>
        <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar />
                <div className='container-fluid'>
                    <Routes>
                       
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/utilities" element={<User />} />
                        <Route path="/utilities/create" element={<Createuser />} />
                        <Route path="/Components" element={<Product />} /> 
                        <Route path="/utilities/view/:userid" element={<ViewUser/>} />
                        <Route path='/utilities/edit/:userId' element={<Useredit/>} />
                        <Route path="/Page" element={<Page />} /> 
                        <Route path="/page/view/:bookid" element={<Pageview />} />
                        <Route path="/PageUser" element={<PageUser/>}/>
                       </Routes>
                </div> 
            </div>
        </div>
    </div>
    </HashRouter>
);

}
 
export default App;
