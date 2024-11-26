"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Truck, Bike } from "lucide-react";

export default function VehicleSearch() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [vehicleType, setVehicleType] = useState("nuevos");
  const [category, setCategory] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState([0, 100000]);

  const categories = {
    carros: [
      { value: "automoviles", label: "Automóviles", icon: Car },
      { value: "camionetas", label: "Camionetas", icon: Truck },
      { value: "camionetasBatea", label: "Camionetas con batea", icon: Truck },
      { value: "camiones", label: "Camiones / Buses", icon: Truck },
      { value: "hibridos", label: "Híbridos y Eléctricos", icon: Car },
    ],
    motos: [
      { value: "todos", label: "Todos", icon: Bike },
      { value: "4ruedas", label: "4 Ruedas", icon: Bike },
      { value: "3ruedas", label: "3 Ruedas", icon: Bike },
      { value: "2ruedas", label: "2 Ruedas", icon: Bike },
    ],
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Buscar Vehículos</h2>
        <Tabs
          defaultValue="nuevos"
          onValueChange={(value) => setVehicleType(value)}
        >
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="nuevos">Carros Nuevos</TabsTrigger>
            <TabsTrigger value="usados">Carros Usados</TabsTrigger>
            <TabsTrigger value="motos">Motos</TabsTrigger>
          </TabsList>
          <TabsContent value="nuevos">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
              {categories.carros.map((cat) => (
                <Button
                  key={cat.value}
                  variant={category === cat.value ? "default" : "outline"}
                  className="flex flex-col items-center justify-center h-24"
                  onClick={() => setCategory(cat.value)}
                >
                  <cat.icon className="w-8 h-8 mb-2" />
                  <span className="text-xs text-center">{cat.label}</span>
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="usados">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
              {categories.carros.map((cat) => (
                <Button
                  key={cat.value}
                  variant={category === cat.value ? "default" : "outline"}
                  className="flex flex-col items-center justify-center h-24"
                  onClick={() => setCategory(cat.value)}
                >
                  <cat.icon className="w-8 h-8 mb-2" />
                  <span className="text-xs text-center">{cat.label}</span>
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="motos">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              {categories.motos.map((cat) => (
                <Button
                  key={cat.value}
                  variant={category === cat.value ? "default" : "outline"}
                  className="flex flex-col items-center justify-center h-24"
                  onClick={() => setCategory(cat.value)}
                >
                  <cat.icon className="w-8 h-8 mb-2" />
                  <span className="text-xs text-center">{cat.label}</span>
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Select onValueChange={(value) => setBrand(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
              <SelectItem value="ford">Ford</SelectItem>
              {/* Agregar más marcas según sea necesario */}
            </SelectContent>
          </Select>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio
            </label>
            <Slider
              defaultValue={[0, 100000]}
              max={100000}
              step={1000}
              onValueChange={(value) => setPrice(value)}
            />
            <div className="mt-2 text-sm text-gray-600">
              ${price[0]} - ${price[1]}
            </div>
          </div>
        </div>
        <Button className="w-full md:w-auto">Buscar</Button>
      </div>
    </div>
  );
}
