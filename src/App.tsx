import { useState } from 'react'

interface ButtonProps {
  text?: string;
}


function Button(props: ButtonProps) {
  return <button className="bg-">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div>
      <Button text="Send" />
      <Button text="Ok" />
      <Button />
    </div>
  )
}

export default App
