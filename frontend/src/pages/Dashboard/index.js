import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { parseISO } from 'date-fns';
import { format } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';
import api from '~/services/api';
import { Container, Content } from './styles';

import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import {
  meetupSelected,
  clearMeetupSelected,
} from '~/store/modules/meetup/actions';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('meetups/user');

      const data = response.data.map(m => ({
        ...m,
        dateFormatted: format(
          parseISO(m.date),
          "d 'de' MMMM 'de' yyyy', às' H'h'",
          {
            locale: pt,
            // timezone: 'America/Sao_Paulo',
          }
        ),
      }));
      setMeetup(data);
    }
    loadMeetup();
  }, []);

  function handleDetailPage(meetupInfo) {
    dispatch(meetupSelected(meetupInfo));

    return history.push('/meetup/details');
  }

  function handleCreatePage() {
    dispatch(clearMeetupSelected());

    return history.push('/meetup/create');
  }

  return (
    <Container>
      <Content>
        <div>
          <strong>Meus meetups</strong>

          <button type="button" onClick={handleCreatePage}>
            <MdAddCircleOutline size={20} color="#FFF" /> Novo meetup
          </button>
        </div>

        <div>
          <ul>
            {meetup.map(m => (
              <li key={m.id} onClick={() => handleDetailPage(m)}>
                <strong>{m.title}</strong>
                <div>
                  <span>{m.dateFormatted}</span>
                  <MdChevronRight color="#fff" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Content>
    </Container>
  );
}
