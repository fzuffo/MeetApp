import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name }) {
  const meetupSelected = useSelector(state => state.meetup);

  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  const [selected, setSelected] = useState(parseISO(meetupSelected.date));

  useEffect(() => {
    registerField({
      name: 'date',
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        showTimeSelect
        timeFormat="p"
        dateFormat="Pp"
        placeholderText="Selecione a data"
      />
      {error && <span>{error}</span>}
    </>
  );
}
