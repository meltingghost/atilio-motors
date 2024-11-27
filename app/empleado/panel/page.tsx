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

export default function EmpleadoPanel() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Control - Empleado</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Gestión de Inventario</CardTitle>
            <CardDescription>Administra el stock de vehículos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Añade, edita o elimina vehículos del inventario.</p>
          </CardContent>
          <CardFooter>
            <Link href="/empleado/inventario">
              <Button>Ir a Inventario</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Facturación</CardTitle>
            <CardDescription>Gestiona facturas y pagos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Crea nuevas facturas y revisa el historial de pagos.</p>
          </CardContent>
          <CardFooter>
            <Link href="/empleado/facturacion">
              <Button>Ir a Facturación</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reportes</CardTitle>
            <CardDescription>
              Analiza el rendimiento del negocio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Genera informes de ventas, inventario y más.</p>
          </CardContent>
          <CardFooter>
            <Link href="/empleado/reportes">
              <Button>Ver Reportes</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
