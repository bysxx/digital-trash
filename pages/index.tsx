import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 86px 50px;
`;

const MainTitle = styled.h1`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  letter-spacing: -0.03em;
  color: #000000;
  text-align: center;

  @media all and (max-width: 768px) {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    /* identical to box height */

    letter-spacing: -0.03em;

    color: #000000;
  }
`;

const MainImage = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 93px;
  width: 100%;
  border: 1px solid #000000;
  padding: 100px 0px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 19.6518px;
  line-height: 25px;
  letter-spacing: -0.03em;
  color: #000000;

  input {
    display: none;
  }
`;

const Main: React.FC = () => {
  const [fileImages, setFileImages] = useState<string[]>([]);
  const fileImagesInput = useRef<HTMLInputElement | null>(null);
  const router = useRouter()

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
    <MainContainer>
      <MainTitle>Do you have useless photos?</MainTitle>

      <MainImage
        className="image"
        onClick={() => {
          onClickImages();
        }}
      >
        이미지
        <input
          ref={fileImagesInput}
          className="image__input"
          name="imageUpload"
          type="file"
          accept="image/*"
          onChange={saveFileImage}
          multiple
        />
      </MainImage>
    </MainContainer>
  );
};

export default Main;
