import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={`findContact-${id}`} className={css.label}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        id={`findContact-${id}`}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
