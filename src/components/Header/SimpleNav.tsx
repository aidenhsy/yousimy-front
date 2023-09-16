/** @jsxImportSource @emotion/react */
import { Layout } from 'antd';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

const { Header } = Layout;

const SimpleHeader = () => {
  const router = useRouter();

  return (
    <Header css={headerStyle}>
      <div
        className="tw-flex tw-items-center hover:tw-cursor-pointer"
        onClick={() => router.push('/dashboard')}
      >
        <img
          src="https://yousi-shanghai.oss-cn-shanghai.aliyuncs.com/u4logoPink.png"
          alt="u4logo"
          height={22}
        />
        <h2 className="tw-ml-2 tw-font-bold tw-text-md xs:tw-hidden xxs:tw-hidden">
          优思管理后台
        </h2>
      </div>
    </Header>
  );
};

export default SimpleHeader;

const headerStyle = css`
  position: sticky;
  z-index: 10;
  height: 56px;
  background-color: white;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 34px;
  padding-right: 34px;
`;
