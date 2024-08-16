import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <div className={css.contact}>
      <div>
        <p className={css.name}>👤 {name}</p>
        <p className={css.number}>📞 {number}</p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
}
