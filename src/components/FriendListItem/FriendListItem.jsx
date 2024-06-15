import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClasses = clsx(
    css.container,
    isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="70" />
      <p className={css.text}>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
