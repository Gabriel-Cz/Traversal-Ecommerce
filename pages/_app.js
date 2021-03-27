import store from '../store'
import { Provider } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent'
import { createWrapper } from 'next-redux-wrapper'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}> 
      <NavbarComponent></NavbarComponent>
      <Component {...pageProps} />
    </Provider>
  )
}

const theStore = () => store;
const wrapper = createWrapper(theStore);
export default wrapper.withRedux(MyApp);
