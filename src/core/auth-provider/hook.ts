import { useContext } from "react";
import KcAuthContext from "./context";

export const useAuth = () => useContext(KcAuthContext)