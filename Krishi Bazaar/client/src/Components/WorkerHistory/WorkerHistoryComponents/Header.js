import React from 'react'

function Header(setIsAdding) {
  return (
    <Header>
<h1>WORKER HISTORY MANAGEMENT</h1>
<div style={{marginTop:'30px',marginBottom:'18px'}}>
    <button onClick={()=> setIsAdding(true)} classname= 'square-button'>Add Button</button>
</div>
    </Header>
   
  )
}

export default Header
