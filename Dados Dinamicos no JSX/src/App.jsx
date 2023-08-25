function sum(a , b){
  return a+b
}

export default function App(){
  const tech = "JavaScript"
  const status = false

  return(
    <div>
      <h1> {tech} is Awesome</h1>
      <h2>It's easy, like 1 + 1 is {sum(1, 1)}</h2>
      <p>Current Status: {status ? "ON" : "OFF"}</p>
      <p>{status && "Text"}</p>
    </div>
  )
}