import { AxiosResponse } from 'axios';
import { ResponsePokeByName, ResponsePokeList } from '../utils/types';
import { HandlePokeRequest } from './api';

export const GetByName = async (
  name: string
): Promise<AxiosResponse<ResponsePokeByName>> =>
  await HandlePokeRequest.get(`/pokemon/${name}`);

export const GetPokeList = async (
  qtd: number,
  page: number
): Promise<AxiosResponse<ResponsePokeList>> =>
  await HandlePokeRequest.get(`/pokemon?limit=${qtd}&offset=${page}`);
