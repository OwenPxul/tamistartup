import { Search, MessageCircle, Package, ChefHat, Palette, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const categories = [
    { name: "Empaques", icon: Package, count: 24 },
    { name: "Ingredientes", icon: ChefHat, count: 18 },
    { name: "Decoración", icon: Palette, count: 12 },
  ];

  const featuredOffers = [
    {
      id: 1,
      supplier: "EcoPackaging Pro",
      title: "Contenedores Biodegradables para Alimentos",
      description: "Contenedores 100% compostables perfectos para delivery",
      price: "$0.85/unidad",
      discount: "20% DESC",
      rating: 4.8,
      category: "Empaques"
    },
    {
      id: 2,
      supplier: "Premium Spices Co.",
      title: "Colección de Especias Orgánicas",
      description: "Especias orgánicas de alta calidad directo de granjas",
      price: "$24.99/kg",
      discount: "15% DESC",
      rating: 4.9,
      category: "Ingredientes"
    },
    {
      id: 3,
      supplier: "Creative Labels Ltd",
      title: "Etiquetas Personalizadas para Productos",
      description: "Etiquetas profesionales con tu marca y diseño",
      price: "$1.20/etiqueta",
      discount: "25% DESC",
      rating: 4.7,
      category: "Decoración"
    }
  ];

  const recentOrders = [
    { id: "#ORD-001", supplier: "EcoPackaging Pro", status: "Entregado", date: "hace 2 días" },
    { id: "#ORD-002", supplier: "Premium Spices Co.", status: "En tránsito", date: "hace 5 días" },
    { id: "#ORD-003", supplier: "Creative Labels Ltd", status: "Procesando", date: "hace 1 semana" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Panel del Emprendedor</h1>
            <p className="text-muted-foreground">Encuentra los mejores proveedores para tu negocio</p>
          </div>
          <Button className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Chat con Proveedores
          </Button>
        </div>

        {/* Search Section */}
        <Card>
          <CardHeader>
            <CardTitle>Encontrar Proveedores</CardTitle>
            <CardDescription>Busca por categoría para encontrar los proveedores ideales para tu negocio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar proveedores por categoría, producto o nombre..." 
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="outline"
                  className="gap-2"
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Offers */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Ofertas Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOffers.map((offer) => (
              <Card key={offer.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="destructive" className="mb-2">
                      {offer.discount}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{offer.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{offer.title}</CardTitle>
                  <CardDescription>{offer.supplier}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{offer.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">{offer.price}</span>
                    <Badge variant="secondary">{offer.category}</Badge>
                  </div>
                  <Button className="w-full">Ver Detalles</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Pedidos Recientes
              </CardTitle>
              <CardDescription>Rastrea tus últimos pedidos a proveedores</CardDescription>
            </div>
            <Button variant="outline">Ver Todos los Pedidos</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.supplier}</p>
                  </div>
                  <div className="text-right space-y-1">
                     <Badge 
                      variant={
                        order.status === "Entregado" ? "default" : 
                        order.status === "En tránsito" ? "secondary" : "outline"
                      }
                    >
                      {order.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;