import React, { useState, useContext, createContext } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: jwt } = await axios
      .post(
        `${process.env.apiPublicUrl}/auth/local`,
        {
          identifier: email,
          password: password,
        },
        options
      )
      .catch((error) => {
        console.log('An error ocurred:', error.response);
      });
      if (jwt) {
        const token = jwt.jwt;
        Cookie.set('token', token, { expires: 5 });

        const { data: user } = await axios.get(`${process.env.apiPublicUrl}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(user);
        setUser(user);
      }
  };

  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = '/';
  };

  return {
    user,
    error,
    setError,
    signIn,
    logout,
  };
}
