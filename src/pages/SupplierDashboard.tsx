import { Plus, MessageSquare, TrendingUp, Package, Eye, Edit, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SupplierDashboard = () => {
  const pendingRequests = [
    {
      id: "#REQ-001",
      entrepreneur: "Green Eats Co.",
      product: "Biodegradable Food Containers",
      quantity: "500 units",
      budget: "$400-500",
      deadline: "2 weeks",
      status: "New"
    },
    {
      id: "#REQ-002", 
      entrepreneur: "Artisan Bakery",
      product: "Organic Spice Mix",
      quantity: "10kg",
      budget: "$200-300",
      deadline: "1 week",
      status: "Pending"
    },
    {
      id: "#REQ-003",
      entrepreneur: "Boutique Foods",
      product: "Custom Product Labels",
      quantity: "1000 labels",
      budget: "$800-1200",
      deadline: "3 weeks",
      status: "Responded"
    }
  ];

  const analytics = {
    totalViews: 1247,
    responseRate: 85,
    avgResponseTime: "2.4 hours",
    monthlyRevenue: "$4,230"
  };

  const products = [
    {
      id: 1,
      name: "Biodegradable Food Containers",
      category: "Packaging",
      price: "$0.85/unit",
      stock: "2,500 units",
      status: "Active",
      views: 324
    },
    {
      id: 2,
      name: "Organic Spice Collection",
      category: "Ingredients", 
      price: "$24.99/kg",
      stock: "150 kg",
      status: "Active",
      views: 198
    },
    {
      id: 3,
      name: "Custom Product Labels",
      category: "Decoration",
      price: "$1.20/label",
      stock: "5,000 labels",
      status: "Draft",
      views: 0
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Supplier Dashboard</h1>
            <p className="text-muted-foreground">Manage your products and connect with entrepreneurs</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Product
          </Button>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalViews}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.responseRate}%</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.avgResponseTime}</div>
              <p className="text-xs text-muted-foreground">-30 min from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.monthlyRevenue}</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Requests Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Entrepreneur Requests
              </CardTitle>
              <CardDescription>Respond to requests from entrepreneurs looking for your products</CardDescription>
            </div>
            <Button variant="outline">View All Requests</Button>
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
                          request.status === "New" ? "destructive" : 
                          request.status === "Responded" ? "default" : "secondary"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">{request.entrepreneur}</p>
                    <p className="text-sm text-muted-foreground">{request.product}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Qty: {request.quantity}</span>
                      <span>Budget: {request.budget}</span>
                      <span>Deadline: {request.deadline}</span>
                    </div>
                  </div>
                  <Button size="sm">
                    {request.status === "New" ? "Respond" : "View"}
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
                Product Catalog
              </CardTitle>
              <CardDescription>Manage your current product offerings</CardDescription>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Product
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
                        variant={product.status === "Active" ? "default" : "outline"}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Price: {product.price}</span>
                      <span>Stock: {product.stock}</span>
                      <span>Views: {product.views}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="h-4 w-4" />
                      Edit
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