import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Logo
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/carros" className="text-gray-600 hover:text-gray-800">
              Carros
            </Link>
            <Link href="/motos" className="text-gray-600 hover:text-gray-800">
              Motos
            </Link>
            <Link
              href="/accesorios"
              className="text-gray-600 hover:text-gray-800"
            >
              Accesorios
            </Link>
            <Link href="/planes" className="text-gray-600 hover:text-gray-800">
              Planes
            </Link>
          </div>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition">
            Ingresar
          </button>
        </div>
      </div>
    </nav>
  );
}
