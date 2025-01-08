import './App.css'
import Card from './Components/Card'
import ProductCard from './Components/ProductCard'

function App() {

  const JohnDoe = {
    name: 'John Doe',
    userProfile: 'https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    projectTitleOne: 'Hello World!',
    projectTitleTwo: 'Learning React',
    projectDescription: 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Maxime consequuntur deleniti unde ab ut in!'
  }

  const Angela = {
    username: 'Angela Gold',
    post: 'Staff Engineer',
    profile: "https://images.pexels.com/photos/4492217/pexels-photo-4492217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }

  // Made use of the default value of projectTitles
  const Grace = {
    name: 'Grace Lin',
    post: 'Lead Developer',
    userProfile: "https://images.pexels.com/photos/4474047/pexels-photo-4474047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectDescription: 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Maxime consequuntur deleniti meta lora shaw'
  }
  // Stop

  const Tokyo = {
    username: 'Tokyo Drift',
    post: 'UI/UX Designer',
    profile: "https://images.pexels.com/photos/5244065/pexels-photo-5244065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}

  return (
    <>
      <h1 className='bg-slate-800 text-slate-500 font-semibold text-4xl rounded-lg py-3' >Vite + Tailwind</h1>
      <ProductCard {...JohnDoe} />

      <Card {...Angela}/>

      <ProductCard {...Grace} />

      <Card {...Tokyo} />
    </>
  )
}

export default App
