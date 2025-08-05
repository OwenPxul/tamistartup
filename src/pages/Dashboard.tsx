import { Search, MessageCircle, Package, ChefHat, Palette, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const categories = [
    { name: "Packaging", icon: Package, count: 24 },
    { name: "Ingredients", icon: ChefHat, count: 18 },
    { name: "Decoration", icon: Palette, count: 12 },
  ];

  const featuredOffers = [
    {
      id: 1,
      supplier: "EcoPackaging Pro",
      title: "Biodegradable Food Containers",
      description: "100% compostable containers perfect for food delivery",
      price: "$0.85/unit",
      discount: "20% OFF",
      rating: 4.8,
      category: "Packaging"
    },
    {
      id: 2,
      supplier: "Premium Spices Co.",
      title: "Organic Spice Collection",
      description: "High-quality organic spices sourced directly from farms",
      price: "$24.99/kg",
      discount: "15% OFF",
      rating: 4.9,
      category: "Ingredients"
    },
    {
      id: 3,
      supplier: "Creative Labels Ltd",
      title: "Custom Product Labels",
      description: "Professional labels with your branding and design",
      price: "$1.20/label",
      discount: "25% OFF",
      rating: 4.7,
      category: "Decoration"
    }
  ];

  const recentOrders = [
    { id: "#ORD-001", supplier: "EcoPackaging Pro", status: "Delivered", date: "2 days ago" },
    { id: "#ORD-002", supplier: "Premium Spices Co.", status: "In Transit", date: "5 days ago" },
    { id: "#ORD-003", supplier: "Creative Labels Ltd", status: "Processing", date: "1 week ago" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Entrepreneur Dashboard</h1>
            <p className="text-muted-foreground">Find the best suppliers for your business needs</p>
          </div>
          <Button className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Chat with Suppliers
          </Button>
        </div>

        {/* Search Section */}
        <Card>
          <CardHeader>
            <CardTitle>Find Suppliers</CardTitle>
            <CardDescription>Search by category to find the right suppliers for your business</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search suppliers by category, product, or name..." 
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
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Featured Offers</h2>
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
                  <Button className="w-full">View Details</Button>
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
                Recent Orders
              </CardTitle>
              <CardDescription>Track your latest supplier orders</CardDescription>
            </div>
            <Button variant="outline">View All Orders</Button>
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
                        order.status === "Delivered" ? "default" : 
                        order.status === "In Transit" ? "secondary" : "outline"
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