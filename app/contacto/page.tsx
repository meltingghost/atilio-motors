import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Información de Contacto
          </h2>
          <p className="mb-2">Dirección: Calle Principal #123, Ciudad</p>
          <p className="mb-2">Teléfono: (123) 456-7890</p>
          <p className="mb-2">Email: info@concesionario.com</p>
          <p className="mb-2">Horario: Lunes a Viernes de 9:00 AM a 6:00 PM</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Envíanos un Mensaje</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block mb-1">
                Nombre
              </label>
              <Input id="nombre" placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
            <div>
              <label htmlFor="mensaje" className="block mb-1">
                Mensaje
              </label>
              <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí" />
            </div>
            <Button type="submit">Enviar Mensaje</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
