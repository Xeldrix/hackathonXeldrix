"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "../../src/components/Home/Navbar";
import AuthForm from "../../src/components/auth/AuthForm";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // alterna entre login y sign-up
  const router = useRouter();

  // Función que se llamará al hacer login exitoso
  const handleLogin = () => {
    // Aquí podrías validar el login con tu lógica real
    // Si todo es correcto, redirige al dashboard
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-primary font-sans flex flex-col items-center justify-start pt-16 space-y-12">
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Formulario centrado debajo del navbar */}
      <div className="mt-12 w-full max-w-md p-8 bg-contrast/20 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-secondary text-center mb-6">
          {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
        </h2>

        {/* Pasamos handleLogin a AuthForm */}
        <AuthForm isLogin={isLogin} onLoginSuccess={handleLogin} />

        <p className="text-foreground text-center mt-4">
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
          <button
            className="text-secondary hover:text-accent font-semibold"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Regístrate" : "Iniciar Sesión"}
          </button>
        </p>
      </div>
    </main>
  );
}
