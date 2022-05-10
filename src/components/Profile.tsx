import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
    const {level} = useContext(ChallengeContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/71083690?s=460&u=59801b88b3603cec55a4f6be98871a7c651589c4&v=4" alt="Lucas Machado"/>
            <div>
                <strong>Lucas Machado</strong>
                <p>
                    <img src="icons/level.svg" alt="Level icone"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}