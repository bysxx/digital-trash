import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import { NextPage } from 'next';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  overflow: hidden;

  padding: 40px 100px 0px 100px;
`;

const MainTitle = styled.img`
  width: 800px;
`;

const TrashImageBox = styled.div`
  position: relative;
  width: 800px;

  .trash {
    width: 100%;
  }

  .trash-front {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;

    z-index: 1;
  }

  input {
    display: none;
  }
`;

const DropItem = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-400px);
  }

  10% {
    opacity: 1;
  }
`;

const TrashItem = styled.img<{ left: number }>`
  position: absolute;
  width: 200px;
  opacity: 1;

  top: 230px;
  left: ${(props) => `${props.left}px`};

  animation: ${DropItem} infinite 2s linear normal;
`;

const Main: NextPage = () => {
  const [fileImages, setFileImages] = useState<string[]>([]);
  const fileImagesInput = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const [randomFilePos, setRandomFilePos] = useState<number>(130);
  const [randomPaperPos, setRandomPaperPos] = useState<number>(330);

  const onClickImages = () => {
    fileImagesInput.current?.click();
  };

  const onDropFileEnd = () => {
    const pos = Math.floor(Math.random() * 350) + 125;
    setRandomFilePos(pos);
  }

  const onDropPaperEnd = () => {
    const pos = Math.floor(Math.random() * 350) + 125;
    setRandomPaperPos(pos);
  }

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
        <TrashItem left={randomFilePos} src="/images/file.png" onAnimationIteration={onDropFileEnd} />
        <TrashItem left={randomPaperPos} src="/images/paper.png" onAnimationIteration={onDropPaperEnd} />
      </TrashImageBox>
    </MainContainer>
  );
};

export default Main;
