import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Auth = () => {
  const { signIn, signUp, loading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  });

  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    fullName: '',
    companyName: '',
    role: 'entrepreneur' as 'entrepreneur' | 'supplier'
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await signIn(signInForm.email, signInForm.password);
    
    if (!error) {
      // Navigation will be handled by auth state change
    }
    
    setIsSubmitting(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await signUp(
      signUpForm.email,
      signUpForm.password,
      signUpForm.fullName,
      signUpForm.companyName,
      signUpForm.role
    );
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Volver al Inicio
            </Link>
          </Button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Bienvenido a TAMI</h1>
          <p className="text-muted-foreground">Conecta emprendedores con proveedores</p>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="signup">Registrarse</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardTitle>Iniciar Sesión</CardTitle>
                <CardDescription>
                  Ingresa tu email y contraseña para acceder a tu cuenta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Correo Electrónico</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      value={signInForm.email}
                      onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Contraseña</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      value={signInForm.password}
                      onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting || loading}>
                    {isSubmitting ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Crear Cuenta</CardTitle>
                <CardDescription>
                  Únete a TAMI como emprendedor o proveedor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Correo Electrónico</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      value={signUpForm.email}
                      onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Contraseña</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={signUpForm.password}
                      onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
                      required
                      disabled={isSubmitting}
                      minLength={6}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-fullname">Nombre Completo</Label>
                    <Input
                      id="signup-fullname"
                      type="text"
                      value={signUpForm.fullName}
                      onChange={(e) => setSignUpForm({ ...signUpForm, fullName: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-company">Nombre de la Empresa</Label>
                    <Input
                      id="signup-company"
                      type="text"
                      value={signUpForm.companyName}
                      onChange={(e) => setSignUpForm({ ...signUpForm, companyName: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>Tipo de Cuenta</Label>
                    <RadioGroup
                      value={signUpForm.role}
                      onValueChange={(value: 'entrepreneur' | 'supplier') => 
                        setSignUpForm({ ...signUpForm, role: value })
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="entrepreneur" id="entrepreneur" />
                        <Label htmlFor="entrepreneur">Emprendedor - Necesito proveedores</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="supplier" id="supplier" />
                        <Label htmlFor="supplier">Proveedor - Ofrezco productos/servicios</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting || loading}>
                    {isSubmitting ? 'Creando Cuenta...' : 'Crear Cuenta'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;