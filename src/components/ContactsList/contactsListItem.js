import PropTypes from 'prop-types';
import css from '../../styles/contacts.module.css';

const ContactsListItem = ({ name, number, deletFunc }) => {
  return (
    <li className={css.item}>
      <p className={css.text}>
        {name}
        <span className={css.number}>{number}</span>
      </p>
      <button className={css.button} onClick={deletFunc} type="button">
        Delet
      </button>
    </li>
  );
};
ContactsListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deletFunc: PropTypes.func,
};
export { ContactsListItem };
