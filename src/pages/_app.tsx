import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuthContext";
import { TaskProvider } from "../contexts/TaskContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </AuthProvider>
  );
}

export default MyApp;
