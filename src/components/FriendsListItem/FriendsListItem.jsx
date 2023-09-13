import { Round } from './FriendsListItem.styled';
import { Friends } from 'components/FriendList/FriendList.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Round className={isOnline ? 'online' : 'offline'}></Round>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};
