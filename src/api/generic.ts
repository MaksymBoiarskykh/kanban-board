import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getGeneric = async <T>(url: string, params: object) => {
  const response = await axios.get<T>(url, { params });

  return response.data;
};

export const useGenericQuery = <T>(url: string, params: object) => {
  return useQuery<T>({
    queryKey: ['generic'],
    queryFn: () => getGeneric<T>(url, params),
    refetchOnWindowFocus: false,
    enabled: !!url,
  });
};
