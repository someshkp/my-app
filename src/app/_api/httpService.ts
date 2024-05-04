import axios, { AxiosError, AxiosResponse } from "axios";

function onFulfilled(response: AxiosResponse) {
  return response?.data;
}
function onRejected(error: AxiosError) {
  // if (error?.response?.status === 401) {
  //   doLogoutActions();

  //   window.location.reload();
  // }

  throw error?.response?.data;
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const alkyeService = axios.create({
  baseURL: baseUrl,
});

alkyeService.interceptors.response.use(onFulfilled, onRejected);

export { alkyeService };
