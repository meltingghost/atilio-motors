import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            ¿Cuáles son los métodos de pago aceptados?
          </AccordionTrigger>
          <AccordionContent>
            Aceptamos efectivo, tarjetas de crédito/débito, transferencias
            bancarias y financiamiento a través de nuestros planes de crédito.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            ¿Ofrecen garantía en los vehículos?
          </AccordionTrigger>
          <AccordionContent>
            Sí, todos nuestros vehículos nuevos vienen con garantía del
            fabricante. Para vehículos usados, ofrecemos una garantía limitada
            de 3 meses o 5,000 km, lo que ocurra primero.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            ¿Puedo hacer una prueba de manejo?
          </AccordionTrigger>
          <AccordionContent>
            Por supuesto, ofrecemos pruebas de manejo para todos nuestros
            vehículos. Solo necesitas programar una cita con uno de nuestros
            asesores de ventas.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
