import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user, userRole, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          TAMI Marketplace
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Conecta emprendedores con proveedores especializados. Encuentra la combinación perfecta para tu negocio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/auth">Comenzar</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/auth">Iniciar Sesión</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Para Emprendedores</h3>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>• Encuentra proveedores por categorías especializadas</li>
              <li>• Envía solicitudes de productos/servicios</li>
              <li>• Rastrea tu historial de pedidos</li>
              <li>• Comunicación directa con proveedores</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Para Proveedores</h3>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>• Gestiona tu catálogo de productos</li>
              <li>• Responde a solicitudes</li>
              <li>• Ve analíticas e insights</li>
              <li>• Conecta con emprendedores</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
