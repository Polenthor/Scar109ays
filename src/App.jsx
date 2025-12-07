import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import N from './N'
import NotFound from './NotFound'
import Yes from './Yes'
import Question from './Question'
import Yess from './Yess'
import Question1 from './Question1'
import Iknew from './Iknew'
import Ays from './Ays'
import Ayrs from './Ayrs'
import Yctm from './Yctm'
import Gay from './Gay'
import Three from './Three'
import Birthday from './pages/Birthday'
import BirthdayBomb from './pages/BirthdayBomb'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<N />} />
        <Route path="/yes" element={<Yes />} />
        <Route path="/yess" element={<Yess/>} />
        <Route path="/question" element={<Question />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/iknew" element={<Iknew />} />
        <Route path="/ays" element={<Ays />} />
        <Route path="/yctm" element={<Yctm />} />
        <Route path="/ayrs" element={<Ayrs />} />
        <Route path="/gay" element={<Gay />} />
        <Route path="/3" element={<Three />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/bb" element={<BirthdayBomb />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
