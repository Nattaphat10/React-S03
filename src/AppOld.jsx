import Hello from "./assets/Hello";
function App() {
  console.log('App component');
  const helloData = [
    {name:"Nattaphat", message:"Goog morning"},
    {name:"beam", message:"Goog afternoon"},
    {name:"boss", message:"Goog evening"},
  ]
  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={indax} name={data.name} message={data.message} />
      ))}
      <Contact phont = "1234567890" email="s6506021622132@email.kmutnb.ac.th" />
      </div>
  )
}

export default App
