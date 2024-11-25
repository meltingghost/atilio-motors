"use client";

import { useState } from "react";
import {
  Select,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/app/components/select";
import { Slider } from "@/app/components/slider";
import { Button } from "@/app/components/button";

export default function VehicleSearch() {
  const [vehicleType, setVehicleType] = useState("nuevos");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState([0, 100000]);

  const handleSearch = () => {
    console.log({
      vehicleType,
      category,
      brand,
      price,
    });
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Buscar Vehículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select onValueChange={(value) => setVehicleType(value)}>
            <SelectValue placeholder="Tipo de vehículo" />
            <SelectContent>
              <SelectItem value="nuevos">Carros Nuevos</SelectItem>
              <SelectItem value="usados">Carros Usados</SelectItem>
              <SelectItem value="motos">Motos</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setCategory(value)}>
            <SelectValue placeholder="Categoría" />
            <SelectContent>
              {vehicleType === "motos" ? (
                <>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="4ruedas">4 Ruedas</SelectItem>
                  <SelectItem value="3ruedas">3 Ruedas</SelectItem>
                  <SelectItem value="2ruedas">2 Ruedas</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="automoviles">Automóviles</SelectItem>
                  <SelectItem value="camionetas">Camionetas</SelectItem>
                  <SelectItem value="camionetasBatea">
                    Camionetas con batea
                  </SelectItem>
                  <SelectItem value="camiones">Camiones / Buses</SelectItem>
                  <SelectItem value="hibridos">
                    Híbridos y Eléctricos
                  </SelectItem>
                </>
              )}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setBrand(value)}>
            <SelectValue placeholder="Marca" />
            <SelectContent>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
              <SelectItem value="ford">Ford</SelectItem>
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
        <Button className="mt-4" onClick={handleSearch}>
          Buscar
        </Button>
      </div>
    </div>
  );
}
