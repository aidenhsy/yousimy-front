import { NextPage, GetServerSidePropsContext, GetServerSideProps } from 'next';
import axios from 'axios';

export function withDashItems(fn: any) {
  return async (context: GetServerSidePropsContext) => {
    const { req, res } = context;
    const { resolvedUrl } = context;
    const access_token = req.cookies.access_token;
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_SERVER}/v3/navitems`,
        { resolvedUrl },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const result = await fn(context);
      if (result) {
        return {
          props: {
            ...result.props,
            dashItems: data,
          },
        };
      }
      return {
        props: {
          dashItems: data,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        redirect: {
          destination: '/login',
        },
      };
    }
  };
}
