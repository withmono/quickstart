import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LaunchWidget from './launch-widget';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":country" element={<LaunchWidget />} />
        <Route path="/" element={<Navigate to={"/ng"} />} />
      </Routes>
    </BrowserRouter>
  )
}
