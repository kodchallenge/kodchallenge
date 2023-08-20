import { DefaultSession } from "next-auth";
import { User as UserModel } from "@/types/user";
// nextauth.d.ts
declare module "next-auth" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends UserModel {
    }
  
    interface Session extends DefaultSession {
      user: User;
    }
}