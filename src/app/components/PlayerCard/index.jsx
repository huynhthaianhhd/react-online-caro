import React from 'react';
import { StyledPlayerCard, StyledName, StyledLevel } from './styles';
import AvatarSpin from 'app/components/AvatarSpin';

const PlayerCard = ({ user, ...rest }) => {
  return (
    <StyledPlayerCard {...rest}>
      <StyledName>{user?.name ?? 'Waiting for others . . .'}</StyledName>
      <AvatarSpin
        isLoading={user?.turn}
        size={126}
        src={
          user?.avatar ??
          'https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif'
        }
      />
      <StyledLevel>{user?.level ?? 'Level unknown'}</StyledLevel>
    </StyledPlayerCard>
  );
};

export default PlayerCard;