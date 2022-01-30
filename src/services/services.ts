import { AxiosResponse } from 'axios';
import { IResponseLogin, IResponseUsuarios } from 'utils/types';
import { HandleApi } from './api';

export const GetAllPokes = async (): Promise<AxiosResponse> =>
  await HandleApi.get('/');

export const GetAllUsers = async (): Promise<
  AxiosResponse<IResponseUsuarios>
> => await HandleApi.get(`/usuarios`);

export const UpdateUser = async (): Promise<AxiosResponse> =>
  await HandleApi.put(`/usuarios`);

export const Login = async (
  obj: IRequestLogin
): Promise<AxiosResponse<IResponseLogin>> =>
  await HandleApi.post(`/login`, obj);

export interface IRequestLogin {
  name: string;
  password: string;
}
