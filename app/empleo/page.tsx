import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EmpleoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Oportunidades de Empleo</h1>
      <p className="mb-8">
        Únete a nuestro equipo y sé parte de una empresa líder en el sector
        automotriz.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Asesor de Ventas</CardTitle>
            <CardDescription>Tiempo Completo</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Buscamos un asesor de ventas entusiasta para ayudar a nuestros
              clientes a encontrar el vehículo perfecto.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Aplicar</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mecánico Automotriz</CardTitle>
            <CardDescription>Tiempo Completo</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Se requiere mecánico con experiencia en diagnóstico y reparación
              de vehículos modernos.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Aplicar</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Asistente Administrativo</CardTitle>
            <CardDescription>Medio Tiempo</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Buscamos un asistente administrativo para apoyar en las
              operaciones diarias de nuestra concesionaria.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Aplicar</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
