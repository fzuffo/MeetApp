import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';
import { cancelMeetupRequest } from '~/store/modules/meetup/actions';
import { IoMdCalendar } from 'react-icons/io';
import { MdLocationOn, MdEdit, MdDeleteForever } from 'react-icons/md';

export default function Details() {
  const data = useSelector(state => state.meetup);

  const dispatch = useDispatch();

  function handleCancelMeetup(id) {
    dispatch(cancelMeetupRequest(id));
  }
  // redirecting to /dashboard after delete - in sagas function

  return (
    <Container>
      <Content>
        <div className="meetupHeader">
          <strong>{data.title}</strong>
          <div>
            <Link to="/meetup/update">
              <button className="editButton" type="button">
                <MdEdit size={20} color="#fff" />
                <span>Editar</span>
              </button>
            </Link>

            <button
              onClick={() => handleCancelMeetup(data.id)}
              className="cancelButton"
              type="button"
            >
              <MdDeleteForever size={20} color="#fff" />
              Cancelar
            </button>
          </div>
        </div>

        <div className="descriptionDiv">
          <div id="backgroundBanner">
            <img src={data.File.url} alt="Meetup Banner" />
          </div>
        </div>
        <strong id="description">{data.description}</strong>
        <div id="dateLocation">
          <span>
            <IoMdCalendar />
            {data.dateFormatted}
          </span>

          <span>
            <MdLocationOn />
            {data.location}
          </span>
        </div>
      </Content>
    </Container>
  );
}
