import { memo } from 'react';
import Table from './Table';
import saga from './saga';
import { useInjectSaga, useInjectReducer } from 'utils/reduxInjectors';
import { sliceKey, reducer } from './slice';
import useHooks from './hooks';
import Title from 'app/components/Title';
import { StyledLayout } from './styles';
import { UserDetail } from './Userdeltail';

export const UserList = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { selectors, handles } = useHooks();
  const { userList } = selectors;
  const { handleBlock } = handles;
  return (
    <StyledLayout>
      <Title level={4}>List of User</Title>
      <Table dataSource={userList} handleBlock={handleBlock} />
      <UserDetail />
    </StyledLayout>
  );
};
export default memo(UserList);
