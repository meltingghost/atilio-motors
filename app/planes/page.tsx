import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/app/components/navbar";

export default function PlanesPage() {
  const images = [
    { src: "/images/financing/financing-1.jpg" },
    { src: "/images/financing/financing-2.jpg" },
    { src: "/images/financing/financing-3.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <header className="relative h-96">
          <Image
            src="/images/financing/financing-hero.jpg"
            alt="Financiamiento"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Planes de Financiamiento
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Hacemos realidad tus sueños de tener un vehículo propio con
                nuestros flexibles planes de financiamiento.
              </p>
            </div>
          </div>
        </header>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Cómo Funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    1. Elige tu Vehículo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Selecciona el auto o moto de tus sueños de nuestra amplia
                    gama de opciones.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    2. Solicita tu Financiamiento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Completa nuestra sencilla solicitud en línea o visita
                    nuestra concesionaria.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    3. Aprobación Rápida
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Recibe una respuesta en 24 horas y llévate tu vehículo en
                    poco tiempo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Noticias y Tips
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <Card key={index}>
                  <Image
                    src={image.src}
                    alt={`Noticia ${index}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>Título de la Noticia {index}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Breve descripción de la noticia o tip financiero. Haz clic
                      para leer más.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Cuáles son los requisitos para aplicar?
                </AccordionTrigger>
                <AccordionContent>
                  Los requisitos básicos incluyen ser mayor de edad, tener un
                  ingreso estable, y proporcionar documentos de identificación.
                  Los requisitos específicos pueden variar según el plan de
                  financiamiento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  ¿Cuál es el plazo máximo de financiamiento?
                </AccordionTrigger>
                <AccordionContent>
                  Ofrecemos plazos de financiamiento de hasta 72 meses,
                  dependiendo del monto y del plan seleccionado. Te ayudaremos a
                  elegir el plazo que mejor se adapte a tu situación financiera.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  ¿Puedo hacer pagos anticipados?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, aceptamos pagos anticipados sin penalización. Esto puede
                  ayudarte a reducir el tiempo de tu préstamo y el monto total
                  de intereses a pagar.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
}
