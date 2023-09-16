// api.ts
import { Brands } from '@/graphql/__generated__/graphql';
import axios from 'axios';

export async function fetchBrandsAndStores(access_token: string) {
  let brandsData = []
  let storesData = []
  try {
    const brandsStores = await axios.post(
      `https://myapi.yousico.com/api/rest/brandsstores`,
      {
        brandFilter: {
          status: {
            _eq: 2,
          },
          is_operation: {
            _eq: true,
          },
        },
        storeFilter: {
          status: {
            _eq: 2,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    brandsData =
      brandsStores.data.brands.length > 0
        ? brandsStores.data.brands.map((b: Brands) => b.name)
        : [];
    storesData =
      brandsStores.data.brands.length > 0
        ? brandsStores.data.brands.reduce((acc: any, curr: Brands) => {
          acc[curr.name] = curr.stores.map((city) => city.name);
          return acc;
        }, {})
        : [];
  } catch (error) {

  }
  return { brandsData, storesData };
}
