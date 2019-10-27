import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text, ActivityIndicator } from 'react-native';

import api from '~/services/api';

import { createSubscriptionRequest } from '~/store/modules/subscription/actions';

import { addDays, subDays, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';
import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import {
  Container,
  Card,
  ImageBanner,
  Title,
  DateTitle,
  DateText,
  SubmitButton,
  Details,
  TextInfo,
  DashboardFlatList,
  EmptyText,
} from './styles';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState('');
  const [meetups, setMeetups] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const dateTitle = useMemo(() => format(date, "d 'de' MMMM", { locale: pt }), [
    date,
  ]);
  const dateParamApi = useMemo(
    () => format(date, 'yyyy-MM-dd', { locale: pt }),
    [date]
  );

  useEffect(() => {
    loadMeetups();
  }, [date]);

  async function loadMeetups() {
    // setRefreshing(true);
    const response = await api.get('meetups', {
      params: {
        date: dateParamApi,
        page,
      },
    });

    const newData = response.data.map(meetup => ({
      ...meetup,
      dateInfo: format(new Date(meetup.date), "dd 'de' MMMM', às 'H'h' ", {
        locale: pt,
      }),
    }));

    setLastPage(page);
    setMeetups(page >= 2 ? [...meetups, ...newData] : newData);

    if (newData.length > 0) {
      setPage(page + 1);
    }
    setRefreshing(false);
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
    setPage(1);
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
    setPage(1);
  }

  function handleSubscription(id) {
    dispatch(createSubscriptionRequest(id));
  }

  function handleMore() {
    if (lastPage !== page) {
      setRefreshing(true);
      loadMeetups();
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <DateTitle>
          <Icon
            name="chevron-left"
            size={36}
            color="#fff"
            onPress={handlePrevDay}
          />
          <DateText>{dateTitle}</DateText>
          <Icon
            name="chevron-right"
            size={36}
            color="#fff"
            onPress={handleNextDay}
          />
        </DateTitle>

        {meetups <= 0 ? (
          <EmptyText>Nenhum meetup encontrado</EmptyText>
        ) : (
          <DashboardFlatList
            onEndReached={handleMore}
            onEndReachedThreshold={0.2}
            horizontal={false}
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card>
                <ImageBanner source={{ uri: item.File.url }} />
                <Title>{item.title}</Title>

                <Details>
                  <Icon name="event" size={14} color="#999" />
                  <TextInfo>{item.dateInfo}</TextInfo>
                </Details>

                <Details>
                  <Icon name="place" size={14} color="#999" />
                  <TextInfo>{item.location}</TextInfo>
                </Details>

                <Details>
                  <Icon name="person" size={14} color="#999" />
                  <TextInfo>Organizador: {item.User.name}</TextInfo>
                </Details>

                {!item.past ? (
                  <SubmitButton onPress={() => handleSubscription(item.id)}>
                    Realizar inscrição
                  </SubmitButton>
                ) : (
                  <SubmitButton past={item.past}>
                    Realizar inscrição
                  </SubmitButton>
                )}
              </Card>
            )}
          />
        )}
        {refreshing ? <ActivityIndicator style={{ padding: 10 }} /> : null}
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
