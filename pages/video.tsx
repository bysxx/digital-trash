import { useRouter } from 'next/router';
import React, { useRef, useEffect } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.defaultMuted = true;
    videoRef.current.muted = true;
  }, []);

  return (
    <VideoContainer>
      <VideoBox ref={videoRef} autoPlay playsInline onEnded={() => router.push('/')}>
        <source src="/images/video.mp4" />
      </VideoBox>
    </VideoContainer>
  );
};

export default Video;
