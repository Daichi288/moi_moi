import type { Component } from "solid-js";
import Card from "@suid/material/Card";
import CardActions from "@suid/material/CardActions";
import CardContent from "@suid/material/CardContent";
import { IUser } from "entities/identity/User";

interface UserCardProps {
  user: IUser;

}
const UserCard: Component<UserCardProps> = (props) => {
  return ( 
    <Card>
      <CardContent>
        <div>{props.user.name}</div>
        <div>{props.user.id}</div>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}
export default UserCard;
