
import './Home.css';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import triangle from '../../images/bg-triangle.svg'
import scissor from '../../images/icon-scissors.svg'
import paper from '../../images/icon-paper.svg'
import rock from '../../images/icon-rock.svg'
import logo from '../../images/logo.svg'
import rules from '../../images/image-rules.svg'
import close from '../../images/icon-close.svg'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

function Home() {
  const navigate = useNavigate();

  let arr = ["rock","paper","scissor"]
  var computerChoice  = (arr[(Math.floor(Math.random()*arr.length))])

  const [open, setOpen] = React.useState(false);
 
    const handleClickToOpen = () => {
        setOpen(true);
    };
 
    const handleToClose = () => {
        setOpen(false);
    };
 

  const location = useLocation();
  const initialWinCount = location.state ? location.state.winCount || 0 : 0; // Ensure winCount is defined
  
  const [winCount, setWinCount] = useState(initialWinCount);
  
     const handleImageClick = (e) => {
      navigate('/game',{state:{playerChoice:e,computerChoice,winCount}});
    };
   
  return (
  <><div className="top__display">
      <p className="logo"> <img src={logo} alt="logo"/></p>
      <div className="score__display">
        <p className="score__style"> SCORE </p>
        <p className="score__points"> {winCount} </p>
      </div>
    </div>
    <div className="body__display">
      <motion.div whileHover={{ scale: 1.1 }} onHoverStart={e => {}}>
        <span to ='/game' className="dot" onClick={()=> handleImageClick("paper")}></span>
        <img className="paper" alt='paper' onClick={()=> handleImageClick("paper")} src={paper}/>
        </motion.div>
        <img className='triangle' alt='triangle' src={triangle}/>
        <motion.div whileHover={{ scale: 1.1 }} onHoverStart={e => {}}>
        <span to ='/game' className="dot1" onClick={()=> handleImageClick("scissor")} ></span>
    <img className="scissor" alt="scissor" onClick={()=> handleImageClick("scissor")} src={scissor}/>
    </motion.div>
    <motion.div whileHover={{ scale: 1.1 }} onHoverStart={e => {}}>
    <span to ='/game' className="dot2" onClick={()=> handleImageClick("rock")}></span>
    <img className="rock" alt="rock" onClick={()=> handleImageClick("rock")} src={rock}/>
      </motion.div>
      </div>
      <div className='rules__display'>
      <button className='rules'  onClick={handleClickToOpen}>RULES</button>
      <Dialog open={open} onClose={handleToClose}>
                <DialogTitle  className='rules_font' disableTypography="true">RULES</DialogTitle>
                <img className='close' onClick={handleToClose} src={close}/>
                <DialogContent>
                <img className="rules__img"src={rules}/>
                </DialogContent>
            </Dialog>
      </div>
      </>
  );
}

export default Home;


