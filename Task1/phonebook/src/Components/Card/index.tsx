import {TCardProps} from "./types"
import styles from "./Card.module.scss"
const {card, avatarContainer, avatar, personalData} = styles;
const Card = ({imageSrc, name, surname, street, postCode, town, subRegion, phoneNumber}: TCardProps) => {
  return (
    <div className={card}>
      <div className={avatarContainer}>
        <img src={imageSrc} className={avatar} alt="avatar" />
      </div>
      <div>
        <p className={personalData}>{`${name} ${surname}`}</p>
        <p>{`${street} ${postCode}`}</p>
        <p>{town}</p>
        <p>{subRegion}</p>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
};
export { Card };
