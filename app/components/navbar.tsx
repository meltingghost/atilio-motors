import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, Bike, Wrench, FileText, LogIn } from "lucide-react";

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
            <Link
              href="/carros"
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
            >
              <Car className="w-4 h-4" />
              <span>Carros</span>
            </Link>
            <Link
              href="/motos"
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
            >
              <Bike className="w-4 h-4" />
              <span>Motos</span>
            </Link>
            <Link
              href="/accesorios"
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
            >
              <Wrench className="w-4 h-4" />
              <span>Accesorios</span>
            </Link>
            <Link
              href="/planes"
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
            >
              <FileText className="w-4 h-4" />
              <span>Planes</span>
            </Link>
          </div>
          <Button variant="outline" className="flex items-center space-x-1">
            <LogIn className="w-4 h-4" />
            <span>Ingresar</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
