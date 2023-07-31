import axios from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type ReservoirCollectionInfoType = {
  token: {
    image: string;
  };
  market: {
    floorAsk: {
      price: {
        currency: {
          symbol: string;
        };
        amount: {
          decimal: number;
        };
      };
    };
  };
};

const requestGetCollectionInfos = async (
  collectionId: string
): Promise<ReservoirCollectionInfoType[]> => {
  const options = {
    method: "GET",
    url: `https://api.reservoir.tools/tokens/v6?collection=${collectionId}&limit=3`,
    headers: {
      accept: "*/*",
      "X-API-KEY": process.env.NEXT_PUBLIC_RESERVOIR_API_KEY,
    },
  };

  return (await axios.request(options)).data.tokens;
};

export const useCollectionInfos = (
  payload: string,
  options?: UseQueryOptions<
    ReservoirCollectionInfoType[],
    Error,
    ReservoirCollectionInfoType[],
    string[]
  >
) => {
  return useQuery({
    queryKey: ["CollectionInfos", payload],
    queryFn: () => requestGetCollectionInfos(payload),
    ...options,
  });
};
