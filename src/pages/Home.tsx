import { useEffect, useState } from 'react'
import classes from './Home.module.css'
import royalDaysAlt from "../audio/Royal_Days_another_version.mp3"
import PomoCard from '../components/PomoCard'

function formalize(sec: number): string{
    let remainingSec = sec
    let hrs = Math.floor(remainingSec / 3600);
    remainingSec = remainingSec % 3600;
    let mins = Math.floor(remainingSec / 60);
    remainingSec = remainingSec % 60;
    let hrsFormal = hrs ? `${hrs}h` : "";
    let minsFormal = mins ? `${mins}m` : "";
    let remainingSecFormal = remainingSec ? `${remainingSec}s` : "";
    return [hrsFormal, minsFormal, remainingSecFormal].join(" ");
}

function playAudio(duration: number){
    const audio = new Audio(royalDaysAlt);
    audio.volume = .15;
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, duration);
}

export default function Home(){

    const duration = 45000;
    let initTimeWork = 1500;
    let initTimeBreak = 300;

    const [btnWork, setBtnWork] = useState(false);
    const [btnBreak, setBtnBreak] = useState(false);
    
    
    const [timeWork, setTimeWork] = useState(initTimeWork);
    const [timeBreak, setTimeBreak] = useState(initTimeBreak);

    const handleWorkClick = () => {
        setBtnWork((prev) => !prev);
    }
    const handleBreakClick = () => {
        setBtnBreak((prev) => !prev);
    }
    const handleWorkSkip = () => {
        if (timeWork != initTimeWork){
            setBtnWork(false);
            setTimeWork(initTimeWork);
            playAudio(duration);
        }
    }
    const handleBreakSkip = () => {
        if (timeBreak != initTimeBreak){
            setBtnBreak(false);
            setTimeBreak(initTimeBreak);
            playAudio(duration);
        }
    }

    useEffect(() => {
        if (btnWork){
            const timeout = setTimeout(() => {
                setTimeWork((prev) => {
                    if (prev == 1){
                        clearTimeout(timeout);
                        playAudio(duration);
                        setBtnWork(false);
                        return initTimeWork;
                    }
                    return prev - 1
                })
            }, 1000);
            return () => clearTimeout(timeout);
        }
        
        if (btnBreak){
            const timeout = setTimeout(() => {
                setTimeBreak((prev) => {
                    if (prev == 1){
                        clearTimeout(timeout);
                        playAudio(duration);
                        setBtnBreak(false);
                        return initTimeBreak;
                    }
                    return prev - 1;
                })
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [btnWork, btnBreak, timeWork, timeBreak])
    
    return(
        <>
        <PomoCard/>
        <div className={classes.work}>
            work: {formalize(timeWork)}
            <button onClick={handleWorkClick}>{btnWork ? "Pause": "Start"}</button>
            <button onClick={handleWorkSkip}>Skip</button>
        </div>

        <div className={classes.break}>
            break: {formalize(timeBreak)}
            <button onClick={handleBreakClick}>{btnBreak ? "Pause": "Start"}</button>
            <button onClick={handleBreakSkip}>Skip</button>
        </div>

        </>
    )
}