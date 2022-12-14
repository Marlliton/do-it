import { createContext, useEffect, useState } from "react";
import User from "../core/user/User";
import { services } from "../service";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  loginWithGoogle(): Promise<void>;
  logout(): Promise<void>;
}

interface AuthProviderProps {
  children: any;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  async function configureSection(user: User | null) {
    if (user?.email) {
      setUser(user);
      handleCookies(true)
    } else {
      setUser(null);
      handleCookies(false)
    }
  }
  
  async function loginWithGoogle() {
    setLoading(true);
    try {
      const user = await services.auth.loginWithGoogle();
      configureSection(user)
      setLoading(false);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    configureSection(null)
    await services.auth.logout();
    router.push("/")
    setLoading(false)
  }

  function handleCookies(toSave: boolean = false) {
    if (toSave) {
      Cookies.set("do-it", `${toSave}`, { expires: 1 });
    } else {
      Cookies.remove("do-it");
    }
  }

  useEffect(() => {
    if(Cookies.get("do-it")) {
      const unsubscribe = services.auth.observeUserChanged(configureSection)
      router.push("/dashboard");
      return unsubscribe()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
