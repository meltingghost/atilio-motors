export default function InfoSections() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Acerca de Nuestra Empresa</h2>
          <p className="text-gray-600">
            Somos un concesionario líder en la venta de automóviles y motos,
            comprometidos con ofrecer la mejor calidad y servicio a nuestros
            clientes. Con años de experiencia en el mercado, nos enorgullece
            brindar una amplia selección de vehículos para satisfacer todas las
            necesidades.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Venta de vehículos nuevos y usados</li>
            <li>Servicio de mantenimiento y reparación</li>
            <li>Financiamiento y leasing</li>
            <li>Venta de accesorios y repuestos</li>
            <li>Asesoría personalizada</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Planes de Financiamiento</h2>
          <p className="text-gray-600">
            Ofrecemos una variedad de planes de financiamiento para que puedas
            adquirir el vehículo de tus sueños. Nuestros asesores financieros
            están disponibles para ayudarte a encontrar la mejor opción que se
            adapte a tus necesidades y presupuesto.
          </p>
        </section>
      </div>
    </div>
  );
}
