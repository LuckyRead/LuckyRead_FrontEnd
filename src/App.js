
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Init}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/fragmentspage' component={FragmentsPage}/>
          <Route path='/categoriespage' component={Categories_List}/>
          <Route path='/:fragment_id' component={Fragment}/>
        </Switch>
      </div>
    </BrowserRouter>);
  }
}

library.add(faSmile);
library.add(faMeh);
library.add(faFrown);
library.add(faCheck);


export default App;

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Init}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/fragmentspage' component={FragmentsPage}/>
          <Route path='/categoriespage' component={Categories_List}/>
          <Route path='/:fragment_id' component={Fragment}/>
          <Route path='/fragmentspage' component={requireAuth(FragmentsPage)}/>
          <Route path='/categoriespage' component={requireAuth(Categories_List)}/>
          <Route path='/:fragment_id' component={Fragment}/>
        </Switch>
      </div>
    </BrowserRouter>);
  }
}

library.add(faSmile);
library.add(faMeh);
library.add(faFrown);
library.add(faCheck);


export default App;
