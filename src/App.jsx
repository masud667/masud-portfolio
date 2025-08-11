import './App.css'

function App() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      
      <h1>Masud </h1>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Dark Mode
      </button>

      <h1 className="text-3xl font-bold">Hello Mamba UI + Tailwind!</h1>
    </div>
    </>
  )
}

export default App
