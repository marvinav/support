import { useState } from 'react'
import './App.css'
import { Page } from './layout/page/Page'

const FirstPage = () => {
  return <Page title='First Page' footer='(c) marvinav'>
    <span>
        I am first page
    </span>
  </Page>
}

function App() {
  const [page, setPage] = useState(0)

  return <FirstPage />;
}

export default App
