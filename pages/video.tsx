import { useRouter } from 'next/router';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #000;
`;

const VideoBox = styled.video`
  max-height: 100%;
  max-width: 100%;
`;

const Video: React.FC = () => {
  const router = useRouter();

  return (
    <VideoContainer>
      <VideoBox autoPlay muted playsInline onEnded={() => router.push('/')}>
        <source src="/images/video.mp4" />
      </VideoBox>
    </VideoContainer>
  );
};

export default Video;
