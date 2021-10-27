import React, { createContext, useContext, useState } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';

interface UserData {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  company: string;
  blog: string;
  location: string;
  followers: number;
  following: number;
  created_at: string;
}

interface ResponseData extends UserData {}

interface UserContextData {
  user: UserData | null;
  isLoading: boolean;
  hasSearched: boolean;
  username: string;
  updateUsername: (username: string | '') => void;
  getUser: (username: string) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const getUser = async (username: string) => {
    if (!username)
      return toast.warn('Nome de usuário necessário', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

    if (!hasSearched) setHasSearched(true);
    setIsLoading(true);

    try {
      const { data } = await api.get<ResponseData>(`/users/${username}`);

      setUser(() => {
        setIsLoading(false);
        setUsername('');
        return data;
      });
    } catch (err) {
      if (err instanceof Error) {
        setIsLoading(false);
        setUser(() => {
          setIsLoading(false);
          setUsername('');
          return null;
        });
      }
    }
  };

  const updateUsername = (username: string) => {
    setUsername(username);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        hasSearched,
        username,
        updateUsername,
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
