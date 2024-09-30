import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import browseRouter from './routes/router'
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={browseRouter} />
    </Provider>
  )
}

export default App
