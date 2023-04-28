import React, { useState, useRef, useEffect } from 'react'
import './timerStyle.css';

const Timer = ({ cdMin, cdhr }) => {

	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');
	const [timeUp, setTimeUp] = useState(false);
	const [timer1, setTimer1] = useState({
		h: '00',
		m: '00',
		s: '00'
	});


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
			= getTimeRemaining(e);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
			setTimer1({ h: (hours > 9 ? hours : '0' + hours), m: (minutes > 9 ? minutes : '0' + minutes), s: (seconds > 9 ? seconds : '0' + seconds) });

			if (minutes === 0 && seconds === 0) {
				setTimeUp(true);
			}
		}
	}


	const clearTimer = (e) => {

		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next	
		setTimer(`${cdhr}:${cdMin}:60`);

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time



		deadline.setSeconds(deadline.getSeconds() + 10);
		deadline.setMinutes(deadline.getMinutes() + cdMin);
		deadline.setHours(deadline.getHours() + cdhr);
		return deadline;
	}

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button
	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

	return (
		<div className=""> 
			<div className="App" style={{display: (timeUp === true) ? "none" : "block"}}>

				<figure className='mt-10 fig'>
					<div class="face top"><p className='parag' id="s">{timer1.h}</p></div>
					<div class="face left"><p className='parag' id="m">{timer1.m}</p></div>
					<div class="face front"><p className='parag' id="h">{timer1.s}</p></div>
				</figure>

				{/* <button onClick={onClickReset}>Reset</button> */}
			</div>

			{timeUp === true && (
				<div className="m-10 flex justify-center"> <img style={{height:"600px"}} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71nDHeoZhyL.jpg" alt="" /></div>
			)}
		</div>
	)
}

export default Timer;
