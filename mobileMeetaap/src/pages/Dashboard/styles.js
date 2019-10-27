import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;

  /* align-items: center; */
`;

export const DateTitle = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  margin: 30px 0;
`;

export const DateText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  margin: 0 10px;
`;

export const DashboardFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: auto;
  margin: 0 20px;
`;

export const Card = styled.View`
  height: auto;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 20px;
`;

export const ImageBanner = styled.Image`
  height: 150px;
  width: 100%;
  background-color: #999;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Title = styled.Text`
  margin: 20px 0 10px 18px;
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const Details = styled.View`
  flex-direction: row;
  margin: 0 0 10px 20px;
`;

export const TextInfo = styled.Text`
  font-size: 13px;
  color: #999;
  margin-left: 5px;
`;

export const SubmitButton = styled(Button)`
  margin: 15px 20px 20px 20px;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const EmptyText = styled.Text`
  color: #999;
  margin-top: 24px;
  align-self: center;
  font-size: 16px;
`;
