import Link from "next/link";

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
