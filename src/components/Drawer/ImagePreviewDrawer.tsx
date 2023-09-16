import { useDrawerStore } from '@/store/drawerStore';
import { Drawer, Image, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

interface ImagePreviewDrawerType {
  open: boolean;
}

const ImagePreviewDrawer: React.FC<ImagePreviewDrawerType> = ({ open }) => {
  const { closeDrawer, imageInfo } = useDrawerStore((state) => ({
    closeDrawer: state.closeDrawer,
    imageInfo: state.drawers.imagePreviewDrawer?.imageInfo,
  }));

  const [imageLoading, setImageLoading] = useState(true);
  useEffect(() => {
    // This effect will run every time `imageInfo` changes.
    setImageLoading(true);
  }, [imageInfo]);

  return (
    <Drawer
      open={open}
      onClose={() => {
        closeDrawer('imagePreviewDrawer');
      }}
      zIndex={1500}
      size="large"
      mask={false}
    >
      <Spin spinning={imageLoading}>
        <Image
          src={`${process.env.NEXT_PUBLIC_OSS}/${imageInfo?.path}`}
          preview={false}
          onLoad={() => setImageLoading(false)}
        />
      </Spin>
    </Drawer>
  );
};

export default ImagePreviewDrawer;
