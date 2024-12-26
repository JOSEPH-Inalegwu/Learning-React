import './App.css'
import Card from './Components/Card'

function App() {

  const Angela = {
    username: 'Angela Gold',
    post: 'Staff Engineer',
    profile: "https://images.pexels.com/photos/4492217/pexels-photo-4492217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }

  const Grace = {
    username: 'Grace Lin',
    post: 'Lead Developer',
    profile: "https://images.pexels.com/photos/4474047/pexels-photo-4474047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }

  const Tokyo = {
    username: 'Tokyo Drift',
    post: 'UI/UX Designer',
    profile: "https://images.pexels.com/photos/5244065/pexels-photo-5244065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}

  return (
    <>
      <h1 className='bg-slate-800 text-slate-500 font-semibold text-4xl rounded-lg py-3' >Vite + Tailwind</h1>
      <Card {...Angela}/>

      <Card  {...Grace} />

      <Card {...Tokyo} />
    </>
  )
}

export default App
