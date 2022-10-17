import type { NextPage } from 'next';
import styled from 'styled-components';
import Post from '@components/Compound/Post'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Post>
        <Post.Title />
        <Post.Comment />
        <Post.Buttons />
      </Post>
    </Container>
  );
};

export default Home;
