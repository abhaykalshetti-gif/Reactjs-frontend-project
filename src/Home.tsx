
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-10 drop-shadow-lg">
        Reactjs Frontend Assignment
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl px-6">
        <Link
          to="./cinefeed"
          className="bg-white text-indigo-600 rounded-2xl shadow-lg p-6 text-center font-semibold text-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl"
        >
          🍿 Cinefeed
        </Link>

        <Link
          to="./flicklist"
          className="bg-white text-purple-600 rounded-2xl shadow-lg p-6 text-center font-semibold text-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl"
        >
          🎥 FlickList
        </Link>

        <Link
          to="./nightpicker"
          className="bg-white text-pink-600 rounded-2xl shadow-lg p-6 text-center font-semibold text-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl"
        >
          🌙 NightPicker
        </Link>
      </div>
    </div>
  )
}

export default Home
