import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VehicleCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

export function VehicleCard({
  image,
  title,
  description,
  price,
}: VehicleCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-bold">${price.toLocaleString()}</span>
        <Button>Ver detalles</Button>
      </CardFooter>
    </Card>
  );
}
