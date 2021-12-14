import { ContactsListItem } from './contactsListItem';
import PropTypes from 'prop-types';
import css from '../../styles/contacts.module.css';

const ContactsList = ({ contacts, deletFunc }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          deletFunc={() => deletFunc(contact.id)}
        />
      ))}
    </ul>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.array,
  deletFunc: PropTypes.func,
};
export { ContactsList };
