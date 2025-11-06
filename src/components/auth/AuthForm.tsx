"use client";

import React from "react";

interface AuthFormProps {
  isLogin: boolean;
  onLoginSuccess?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onLoginSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí va tu validación de login/sign-up
    // Por ahora simulamos éxito
    if (onLoginSuccess) onLoginSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Correo electrónico"
        className="p-3 rounded-lg border border-gray-300"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="p-3 rounded-lg border border-gray-300"
        required
      />
      <button
        type="submit"
        className="bg-secondary text-white py-3 rounded-xl font-semibold hover:bg-accent transition"
      >
        {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
      </button>
    </form>
  );
};

export default AuthForm;
