import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.profileContainer}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.avatarName}>{name}</p>
        <p className={css.avatarTag}>@{tag}</p>
        <p className={css.avatarLoc}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.listSpan}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.listSpan}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.listSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
