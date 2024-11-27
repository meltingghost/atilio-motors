"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Car, Bike, Wrench, FileText, LogIn } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  email: z
    .string()
    .email("Ingresa un correo válido")
    .nonempty("El correo es obligatorio"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .nonempty("La contraseña es obligatoria"),
  role: z.enum(["cliente", "empleado"]),
});

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "cliente",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Aquí iría la lógica de autenticación real
    if (values.role === "cliente") {
      router.push("/cliente/inicio");
    } else {
      router.push("/empleado/panel");
    }
    setShowPopup(false);
  }

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    }

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <>
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
            <Button
              variant="outline"
              className="flex items-center space-x-1"
              onClick={togglePopup}
            >
              <LogIn className="w-4 h-4" />
              <span>Ingresar</span>
            </Button>
          </div>
        </div>
      </nav>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="bg-white rounded-lg shadow-lg p-6 w-96"
          >
            <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Usuario</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu rol" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cliente">Cliente</SelectItem>
                          <SelectItem value="empleado">Empleado</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={togglePopup}>
                    Cancelar
                  </Button>
                  <Button type="submit">Iniciar Sesión</Button>
                </div>
              </form>
            </Form>
            <p className="mt-4 text-sm text-gray-600">
              Los clientes pueden ver vehículos y hacer consultas. Los empleados
              tienen acceso al panel de control para gestión de inventario,
              facturación y reportes.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
