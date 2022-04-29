import { useQuery } from "react-query";
import { api } from "../axios";

interface User{
  id: string,
  name: string,
  email: string,
  createdAt: string
}

interface GetUsersResponse{
  totalCount: number,
  users: User[]
}

export async function getUsers(page: number): Promise<GetUsersResponse>  {
  const { data, headers } = await api.get('users', {
    params: {
      page: page
    }
  });

  const totalCount = Number(headers['x-total-count'])

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

  return {
    users,
    totalCount
  };
};

export function useUsers(page: number){
  return useQuery(["users", page], () => getUsers(page)) 
}