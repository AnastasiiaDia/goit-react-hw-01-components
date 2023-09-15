import PropTypes from 'prop-types';

import { Stat, StatList, StatListItem } from './Statistics.styled';
export const Statistics = props => {
  return (
    <Stat className="statistics">
      <h2 className="title">{props.title}</h2>
      <StatList className="stat-list">
        {props.stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </StatListItem>
          );
        })}
      </StatList>
    </Stat>
  );
};
StatListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
