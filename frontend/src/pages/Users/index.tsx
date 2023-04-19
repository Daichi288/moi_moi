// @refresh
import { Component, createSignal, For, onMount } from 'solid-js';
import {
  Button,
  Box,
  Grid,
  UserCard,
} from '../../components';
import User, { IUser } from '../../entities/identity/User';

const Users: Component = () => {
  const [users, setUsers] = createSignal<IUser[]>([]);

  // LifeCycles
  onMount(async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setUsers([
      new User({
        id: '119218432',
        name: 'たかぽんぬふ',
      }),
      new User({
        id: '114189572',
        name: '雀鬼の虎の子',
      })
    ]);
  });

  return (
    <Box>
      <Grid
        container
        spacing={2}
      >
        <For each={users()}>{(user) =>
          <Grid item xs={6}>
            <UserCard
              user={user}
            />
          </Grid>
        }</For>
      </Grid>
    </Box>
  )
}

export default Users;