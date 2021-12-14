import { PropTypes } from 'prop-types';
import css from '../../styles/filter.module.css';

const Filter = ({ filter, value }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contact by name</p>
      <label>
        <input onChange={filter} type="text" name="filter" value={value} />
      </label>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.func,
  value: PropTypes.string,
};

export { Filter };
