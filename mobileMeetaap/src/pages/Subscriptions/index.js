import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Background from '~/components/Background';
import Header from '~/components/Header';

import api from '~/services/api';
import { cancelSubscriptionRequest } from '~/store/modules/subscription/actions';
import { format } from 'date-fns';

import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Card,
  ImageBanner,
  Title,
  SubmitButton,
  Details,
  TextInfo,
  SubscriptionsFlatList,
  TextEmpty,
  Empty,
} from './styles';

export default function Subscriptions() {
  const dispatch = useDispatch();
  const updateSubscription = useSelector(action => action.subscription);

  const [subscriptions, setSubscriptions] = useState('');
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('meetups/subscriptions');

      const newData = response.data.map(m => ({
        ...m,
        dateInfo: format(new Date(m.Meetup.date), "dd 'de' MMMM', às 'H'h' ", {
          locale: pt,
        }),
      }));
      setRefreshing(false);
      setSubscriptions(newData);
    }

    loadSubscriptions();
  }, [refreshing, updateSubscription]);

  function handleCancel(id) {
    dispatch(cancelSubscriptionRequest(id));
  }

  function handleRefresh() {
    setRefreshing(true);
  }

  return (
    <Background>
      <Header />
      <Container>
        {subscriptions.length > 0 ? (
          <SubscriptionsFlatList
            refreshing={refreshing}
            onRefresh={handleRefresh}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card>
                <ImageBanner source={{ uri: item.Meetup.File.url }} />

                <Title>{item.Meetup.title}</Title>

                <Details>
                  <Icon name="event" size={14} color="#999" />
                  <TextInfo>{item.dateInfo}</TextInfo>
                </Details>

                <Details>
                  <Icon name="place" size={14} color="#999" />
                  <TextInfo>{item.Meetup.location}</TextInfo>
                </Details>

                <Details>
                  <Icon name="person" size={14} color="#999" />
                  <TextInfo>Organizador: {item.User.name}</TextInfo>
                </Details>

                <SubmitButton onPress={() => handleCancel(item.id)}>
                  Cancelar inscrição
                </SubmitButton>
              </Card>
            )}
          />
        ) : (
          <Empty>
            <TextEmpty>Nenhuma inscrição realizada</TextEmpty>
          </Empty>
        )}
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
