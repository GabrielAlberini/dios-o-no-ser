import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const CountDown = () => {
    // const PLAY_DATE = 1645382944936 + 1138000000;
    const [timerDays, setTimerDays] = useState("00")
    const [timerHours, setTimerHours] = useState("00")
    const [timerMinutes, setTimerMinutes] = useState("00")
    const [timerSeconds, setTimerSeconds] = useState("00")

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('March 6, 2022 20:00:00').getTime();
        
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);


            if(distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }

    //ComponentDidMount 

    useEffect(()=> {
        startTimer();
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <MainContainer className='timer-container'>
            <TimerContainer className='timer'>
                <PartsOfTimer>
                    <article>
                        <DateOfTimer>{timerDays}</DateOfTimer>
                        <p><small>Días</small></p>
                    </article>
                    <SeparatorsOfTime>:</SeparatorsOfTime>
                    <article>
                        <DateOfTimer>{timerHours}</DateOfTimer>
                        <p><small>Horas</small></p>
                    </article>
                    <SeparatorsOfTime>:</SeparatorsOfTime>
                    <article>
                        <DateOfTimer>{timerMinutes}</DateOfTimer>
                        <p><small>Minutos</small></p>
                    </article>
                    <SeparatorsOfTime>:</SeparatorsOfTime>
                    <article>
                        <DateOfTimer>{timerSeconds}</DateOfTimer>
                        <p><small>Segundos</small></p>
                    </article>
                </PartsOfTimer>
            </TimerContainer>
        </MainContainer>
    )
} 

export { CountDown }

const MainContainer = styled.section`
    color: black;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`
const TimerContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 7em;
    padding-top: 2em;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 480px){
    margin-top: 3rem;
    }    
`
const PartsOfTimer = styled.section`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 3em;
    padding: 3em;
    text-align: center;
`
const DateOfTimer = styled.p`
    font-size: 1rem;
    font-weight: 700;
    font-size: 3rem; 
`
const SeparatorsOfTime = styled.span`
    font-size: 3rem;
`