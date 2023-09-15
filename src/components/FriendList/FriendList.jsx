import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendsListItem/FriendsListItem';
import { Friends } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
            />
          </li>
        );
      })}
    </Friends>
  );
};
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
