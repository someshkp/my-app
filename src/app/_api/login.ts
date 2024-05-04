import { AxiosRequestConfig } from "axios";
import { alkyeService } from "./httpService";

type pData = {
  username: string;
  password: string;
};

type responseData = {
  token: string;
  user_id: number;
};

type list = {
  find: any;
  filter(): unknown;
  id: number;
  customer_name: string;
  emailAdd: string;
  password: string;
};

export const customerLogin = async (payload: pData): Promise<responseData> => {
  return alkyeService.post("/login/", payload);
};

export const findCustomerById = async (
  token: string
): Promise<{
  filter(arg0: (user: any) => void): any;
  data: list;
}> => {
  return alkyeService.get("/customer-list/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};
