import { Plus, MessageSquare, TrendingUp, Package, Eye, Edit, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SupplierDashboard = () => {
  const pendingRequests = [
    {
      id: "#REQ-001",
      entrepreneur: "Green Eats Co.",
      product: "Contenedores Biodegradables para Alimentos",
      quantity: "500 unidades",
      budget: "$400-500",
      deadline: "2 semanas",
      status: "Nuevo"
    },
    {
      id: "#REQ-002", 
      entrepreneur: "Artisan Bakery",
      product: "Mezcla de Especias Orgánicas",
      quantity: "10kg",
      budget: "$200-300",
      deadline: "1 semana",
      status: "Pendiente"
    },
    {
      id: "#REQ-003",
      entrepreneur: "Boutique Foods",
      product: "Etiquetas Personalizadas para Productos",
      quantity: "1000 etiquetas",
      budget: "$800-1200",
      deadline: "3 semanas",
      status: "Respondido"
    }
  ];

  const analytics = {
    totalViews: 1247,
    responseRate: 85,
    avgResponseTime: "2.4 horas",
    monthlyRevenue: "$4,230"
  };

  const products = [
    {
      id: 1,
      name: "Contenedores Biodegradables para Alimentos",
      category: "Empaques",
      price: "$0.85/unidad",
      stock: "2,500 unidades",
      status: "Activo",
      views: 324
    },
    {
      id: 2,
      name: "Colección de Especias Orgánicas",
      category: "Ingredientes", 
      price: "$24.99/kg",
      stock: "150 kg",
      status: "Activo",
      views: 198
    },
    {
      id: 3,
      name: "Etiquetas Personalizadas para Productos",
      category: "Decoración",
      price: "$1.20/etiqueta",
      stock: "5,000 etiquetas",
      status: "Borrador",
      views: 0
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Panel del Proveedor</h1>
            <p className="text-muted-foreground">Gestiona tus productos y conecta con emprendedores</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Agregar Nuevo Producto
          </Button>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vistas del Perfil</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalViews}</div>
              <p className="text-xs text-muted-foreground">+12% vs mes anterior</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasa de Respuesta</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.responseRate}%</div>
              <p className="text-xs text-muted-foreground">+5% vs mes anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tiempo Promedio de Respuesta</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.avgResponseTime}</div>
              <p className="text-xs text-muted-foreground">-30 min vs mes anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ingresos Mensuales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.monthlyRevenue}</div>
              <p className="text-xs text-muted-foreground">+18% vs mes anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Requests Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Solicitudes de Emprendedores
              </CardTitle>
              <CardDescription>Responde a solicitudes de emprendedores que buscan tus productos</CardDescription>
            </div>
            <Button variant="outline">Ver Todas las Solicitudes</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <p className="font-medium text-foreground">{request.id}</p>
                       <Badge 
                        variant={
                          request.status === "Nuevo" ? "destructive" : 
                          request.status === "Respondido" ? "default" : "secondary"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">{request.entrepreneur}</p>
                    <p className="text-sm text-muted-foreground">{request.product}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Cant: {request.quantity}</span>
                      <span>Presupuesto: {request.budget}</span>
                      <span>Fecha límite: {request.deadline}</span>
                    </div>
                  </div>
                  <Button size="sm">
                    {request.status === "Nuevo" ? "Responder" : "Ver"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Product Catalog Manager */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Catálogo de Productos
              </CardTitle>
              <CardDescription>Gestiona tus ofertas de productos actuales</CardDescription>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Agregar Producto
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium text-foreground">{product.name}</h3>
                      <Badge variant="secondary">{product.category}</Badge>
                      <Badge 
                        variant={product.status === "Activo" ? "default" : "outline"}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Precio: {product.price}</span>
                      <span>Stock: {product.stock}</span>
                      <span>Vistas: {product.views}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="h-4 w-4" />
                      Ver
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="h-4 w-4" />
                      Editar
                    </Button>
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

export default SupplierDashboard;