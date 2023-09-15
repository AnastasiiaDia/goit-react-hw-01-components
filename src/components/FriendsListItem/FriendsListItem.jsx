import PropTypes from 'prop-types';
import { Round, FriendImg } from './FriendsListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Round>{isOnline}</Round>
      <FriendImg className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

//  className={isOnline ? 'online' : 'offline'}
