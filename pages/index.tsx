import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import { NextPage } from 'next';
import DroppedItem from '@components/DroppedItem';

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 800px;
  padding: 50px 20px 0px 20px;
  height: 100%;

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

const MainTitle = styled.img`
  width: 100%;
`;

const TrashImageBox = styled.div`
  position: relative;
  width: 100%;

  .trash {
    vertical-align: bottom;

    width: 100%;
  }

  .trash-front {
    position: absolute;
    left: 0;
    top: 0;
    vertical-align: bottom;

    width: 100%;

    z-index: 1;
  }

  input {
    display: none;
  }
`;

const Main: NextPage = () => {
  const [fileImages, setFileImages] = useState<string[]>([]);
  const fileImagesInput = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const onClickImages = () => {
    fileImagesInput.current?.click();
  };

  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      //   setPhotos(Array.from(event.target.files));

      const files = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
      setFileImages(files);

      router.push('/video');
    }
  };

  return (
    <MainLayout>
      <MainBox>
        <MainTitle src="/images/typo.png" />
        <TrashImageBox onClick={onClickImages}>
          <img className="trash" src="/images/trash.png" alt="" />
          <img className="trash-front" src="/images/trash-front.png" alt="" />
          <input
            ref={fileImagesInput}
            className="image__input"
            name="imageUpload"
            type="file"
            accept="image/*"
            onChange={saveFileImage}
            multiple
            style={{ display: 'none' }}
          />
          <DroppedItem type={'file'} />
          <DroppedItem type={'file'} />
          <DroppedItem type={'file'} />
          <DroppedItem type={'paper'} />
          <DroppedItem type={'paper'} />
          <DroppedItem type={'paper'} />
        </TrashImageBox>
      </MainBox>
    </MainLayout>
  );
};

export default Main;
