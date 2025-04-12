import {createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home';
import About from './Components/Home/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
import Layout from './Components/Layout/Layout';
import { LanguageProvider } from './Components/LanguageContext/LanguageContext';
function App() {
  const router = createHashRouter([
    {path:'',element:<Layout/>,children:[
      {path:'' , element:<Home/>},
      {path:'home' , element:<Home/>},
      {path:'about' , element:<About/>},
      {path:'portfolio' , element:<Portfolio/>},
      {path:'contact' , element:<Contact/>},
      {path:'*' , element:<Error/>},
    ]}
  ])

  return (
    <LanguageProvider>
    <RouterProvider router={router} />
  </LanguageProvider>
  )
}

export default App
