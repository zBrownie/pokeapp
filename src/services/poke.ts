import { AxiosResponse } from 'axios';
import { ResponsePokeByName, ResponsePokeList } from '../utils/types';
import HandleRequest from './api';

export const GetByName = async (
  name: string
): Promise<AxiosResponse<ResponsePokeByName>> =>
  await HandleRequest.get(`/pokemon/${name}`);

export const GetPokeList = async (
  qtd: number,
  page: number
): Promise<AxiosResponse<ResponsePokeList>> =>
  await HandleRequest.get(`pokemon?limit=${qtd}&offset=${page}`);
