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
      <VideoBox src="/images/video.mp4" autoPlay muted onEnded={() => router.push('/')}>
        Video
      </VideoBox>
    </VideoContainer>
  );
};

export default Video;
