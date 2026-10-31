import { useState } from 'react'
import './App.css'
import Drawer from './Drawer/Drawer'

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    document.body.style.overflow = "hidden";
    setOpenDrawer(true)
  };
  const handleDrawerClose = () => {
    document.body.style.overflow = "auto";
    setOpenDrawer(false);
  };

  return (
    <>

      <h1>Reusable Drawer</h1>
      <div style={{textAlign: "center"}}>
        <button className="mobile_mnu" onClick={handleDrawerOpen} style={{ width: 120 }}>
          Open Drawer
        </button>
      </div>

      <Drawer isOpen={openDrawer} onClose={handleDrawerClose} >
       <div style={{padding: 30}}>Drawer Content</div> 
      </Drawer>
    </>
  )
}

export default App
