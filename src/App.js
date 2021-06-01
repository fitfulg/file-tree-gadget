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
    
    const direction = isOpen ? 'down' : 'right';
    // const handleClick = () => setIsOpen(!isOpen);
    return (
      <div>
        <span onClick={() => setIsOpen(!isOpen)}>
          <i className="blue folder icon"></i>
          <i className={`caret ${direction} icon`}></i>
        </span>
        {name}
        <div style={{ marginLeft: '17px' }}>
          {isOpen && children}
        </div>
      </div>
    )}

    
  const File = ({ name }) => {
    const fileExtension = name.split('.')[1];
    const fileIcons = {
      mp4: 'headphones',
      jpeg: 'file image',
      png: 'file image outline'
    }

    return (
      <div>
        <i className={`${fileIcons[fileExtension]}  icon`}></i>
        {name}
      </div>
      )
  }

export default App;
