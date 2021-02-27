import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(challengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://media-exp1.licdn.com/dms/image/C5603AQH5RLNByioRyg/profile-displayphoto-shrink_200_200/0/1613504012123?e=1619654400&v=beta&t=b4XSoQsSDh8FPnj9JeuzVrgU1thEr3EVuuf_0uStJqc" alt="Foto Perfil"/>
      <div>
        <strong>Luís Cláudio</strong>
        <p><img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </div>
  )
}