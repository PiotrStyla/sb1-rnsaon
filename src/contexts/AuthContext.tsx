import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: number;
  email: string;
  role: string;
  name?: string;
  specialization?: string;
  bio?: string;
  profilePicture?: string;
}

// ... (pozostała część kodu pozostaje bez zmian)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // ... (pozostała część kodu pozostaje bez zmian)

  const updateUserProfile = async (profileData: Partial<User>) => {
    if (user) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const updatedUser = { ...user, ...profileData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return { success: true, message: 'Profil zaktualizowany pomyślnie' };
    }
    throw new Error('Użytkownik nie jest zalogowany');
  };

  // ... (pozostała część kodu pozostaje bez zmian)
};

// ... (pozostała część kodu pozostaje bez zmian)