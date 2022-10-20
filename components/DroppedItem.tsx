import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import { NextPage } from 'next';

const DropItem = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-150vh);
  }

  10% {
    opacity: 1;
  }
`;

const TrashItem = styled.img<{ left: number, duration: number }>`
  position: absolute;
  width: 200px;
  opacity: 1;

  top: 230px;
  left: ${(props) => `${props.left}px`};

  animation: ${DropItem} infinite linear normal;
  animation-duration: ${(props) => `${props.duration}s`};
`;

type DropType = 'file' | 'paper';

interface Props {
  type: DropType;
}

const DroppedItem = ({ type }: Props) => {
  const getRandomPos = () => {
    return Math.floor(Math.random() * 350) + 125;
  };

  const [randomPos, setRandomPos] = useState<number>(getRandomPos());
  const [duration, setDuration] = useState<number>((Math.random() * 5) + 1);

  const onDropEnd = () => {
    const pos = getRandomPos();
    setRandomPos(pos);
  };

  return (
    <>
      <TrashItem src={`/images/${type}.png`} left={randomPos} duration={duration} onAnimationIteration={onDropEnd} />
    </>
  );
};

export default DroppedItem;
