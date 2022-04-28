import { stringOrNumber } from "@chakra-ui/core";
import { useQuery } from "react-query";
import { api } from "../axios";

interface User{
  id: string,
  name: string,
  email: string,
  createdAt: string
}

export async function getUsers(): Promise<User[]>  {
  const { data } = await api.get("http://localhost:3000/api/users");

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.cretedAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
};

export function useUsers(){
  return useQuery("users", getUsers) 
}