import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../api";

export type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: User) => {
    return {
      ...user,
      created_at: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page));
}
