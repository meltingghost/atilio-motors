import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ClienteInicio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bienvenido, Cliente</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ver Vehículos</CardTitle>
            <CardDescription>
              Explora nuestra selección de autos y motos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Descubre los últimos modelos y ofertas especiales.</p>
          </CardContent>
          <CardFooter>
            <Link href="/carros">
              <Button>Ver Autos</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hacer Consulta</CardTitle>
            <CardDescription>
              ¿Tienes preguntas? Estamos aquí para ayudarte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Contacta con nuestro equipo de ventas para obtener más
              información.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/contacto">
              <Button>Contactar</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mis Cotizaciones</CardTitle>
            <CardDescription>
              Revisa y gestiona tus cotizaciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Accede a tus cotizaciones guardadas y realiza seguimiento.</p>
          </CardContent>
          <CardFooter>
            <Link href="/cliente/cotizaciones">
              <Button>Ver Cotizaciones</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
