import { createRoot } from 'react-dom/client'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './index.css'
const App = lazy(() => import("./App.jsx"))


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<div className='w-[100vw] h-[100vh] flex justify-center items-center'><span className='loader'></span></div>}>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>
)
