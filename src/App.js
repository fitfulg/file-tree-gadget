import { useState } from "react"

function App() {
  return(
    <div>
      <Folder name='Desktop'> 
        <Folder name='Music'>
          <File name='all_star.mp4' />
          <File name='express_file.mp4' />
        </Folder>
        <File name='dogs.jpeg' />
        <File name='cats.png' />
      </Folder>

      <Folder name='Applications' />
    </div>
  )}

  const Folder = ({ name, children }) => { 
    const [isOpen, setIsOpen] = useState(true);
    
    // const handleClick = () => setIsOpen(!isOpen);
    return (
      <div>
        <span onClick={() => setIsOpen(!isOpen)}>{name}</span>
        <div style={{ marginLeft: '17px' }}>
          {isOpen && children}
        </div>
      </div>
    )}

  const File = (props) => {
    return <h5>{props.name}</h5>
  }

export default App;
