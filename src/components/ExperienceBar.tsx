import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import Styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengeContext);

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        <header className={Styles.experienceBar}>
            <span>{currentExperience} xp</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`}} />
                <span style={{left:`${percentToNextLevel}%`}} className={Styles.currentExperience}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}