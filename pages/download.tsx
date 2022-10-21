import { NextPage } from 'next';
import styled from 'styled-components';

const DownloadLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  overflow: scroll;
`;

const DownloadList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  width: 100%;
`;

const DownloadItem = styled.li`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;

const DownloadPage: NextPage = () => {
  const images = ['/images/file.png', '/images/paper.png'];

  return (
    <DownloadLayout>
      <DownloadList>
        {images.map((src) => {
          return (
            <DownloadItem key={src}>
              <a href={src} download>
                <img src={src} alt="" />
              </a>
            </DownloadItem>
          );
        })}
      </DownloadList>
    </DownloadLayout>
  );
};

export default DownloadPage;
