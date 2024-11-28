import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/carros" className="hover:text-gray-300">
                  Carros
                </Link>
              </li>
              <li>
                <Link href="/motos" className="hover:text-gray-300">
                  Motos
                </Link>
              </li>
              <li>
                <Link href="/accesorios" className="hover:text-gray-300">
                  Accesorios
                </Link>
              </li>
              <li>
                <Link href="/planes" className="hover:text-gray-300">
                  Planes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicio al Cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contacto" className="hover:text-gray-300">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-300">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/empleo" className="hover:text-gray-300">
                  Trabaje con nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="hover:text-gray-300"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-condiciones"
                  className="hover:text-gray-300"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <p>Dirección: Calle Principal #123, Ciudad</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@concesionario.com</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; 2024 Concesionario de Automóviles. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
