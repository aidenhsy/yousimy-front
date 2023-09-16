import queryString from 'query-string';

const query_params = {
  client_id: 'cli_a39d9592473b900c',
  redirect_uri: `${process.env.NEXT_PUBLIC_URL}/api/auth`,
  response_type: 'code',
};
export const FEISHU_LOGIN_URL = `https://passport.feishu.cn/suite/passport/oauth/authorize?${queryString.stringify(
  query_params
)}`;
