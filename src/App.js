
function App() {
  return(
    <div>
      <Folder name='Desktop'>
      <File name='dogs.jpeg' />
      <File name='cats.png' />
      </Folder>

      <Folder name='Applications' />
    </div>
  )}

  const Folder = (props) => {
    console.log(props);
    
    return (
      <div style={{ border: '2px solid pink' }}>
        {props.name}
        {props.children}
      </div>
    )}

  const File = (props) => {
    return <h5>{props.name}</h5>
  }

export default App;
