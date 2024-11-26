"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .email("Ingresa un correo válido")
    .nonempty("El correo es obligatorio"),
});

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
            className="bg-white rounded-lg shadow-lg p-9 w-96 h-auto"
          >
            <h2 className="text-lg font-bold mb-4">
              Ingresar o Iniciar Sesión
            </h2>
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
                      <FormControl>
                        <Input
                          className="h-14"
                          placeholder="Introduce tu correo"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  variant="outline"
                  className="mr-3"
                  onClick={togglePopup}
                >
                  Cancelar
                </Button>
                <Button type="submit">Aceptar</Button>
              </form>
            </Form>
            <p className="mt-4">
              ¿Eres un empleado?{" "}
              <a href="#" className="underline hover:no-underline">
                Click aquí
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
