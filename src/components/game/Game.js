import './Game.css'
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import scissor from '../../images/icon-scissors.svg'
import paper from '../../images/icon-paper.svg'
import rock from '../../images/icon-rock.svg'
import logo from '../../images/logo.svg'
import React,{ useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import Confetti from 'react-confetti';
import rules from '../../images/image-rules.svg'
import close from '../../images/icon-close.svg'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

function Game() {
    const navigate = useNavigate();

    const location = useLocation();
    const data = location.state; 
    var computerChoice = location.state.computerChoice;
    const [winCount, setWinCount] = useState(0);

    const[showComputerChoice,setComputerChoice] = useState(false);
    const[showSpinner,setShowSpinner] = useState(true);

    const [result, setResult] = useState("");

    const width = window.innerWidth;
    const height = window.innerHeight

    const [open, setOpen] = React.useState(false);
 
    const handleClickToOpen = () => {
        setOpen(true);
    };
 
    const handleToClose = () => {
        setOpen(false);
    };
 

    const handleClick = () => {
        navigate('/',{ state: { winCount }});
      };

      useEffect(() => {
        let gameResult = "";
        if (location.state && location.state.winCount !== undefined) {
            setWinCount(location.state.winCount);
        }
        const timer = setTimeout(() => {
            setComputerChoice(true); 
            setShowSpinner(false);
            if ((data.playerChoice === "rock" && computerChoice === "scissor") || 
                (data.playerChoice === "scissor" && computerChoice === "paper") || 
                (data.playerChoice === "paper" && computerChoice === "rock")) {
                gameResult = "WIN"
                setWinCount(prevCount => prevCount + 1);
            } else if (data.playerChoice === computerChoice) {
                gameResult = "TIE"         
            } else {
                gameResult  = "LOSE"
                }
                setResult(gameResult);

        }, 2000);
        return () => clearTimeout(timer);
    }, [data.playerChoice, computerChoice]);

    return (
        <>
<div className="mytop__display">
      <p className="logo"> <img src={logo} alt='logo'/></p>
      <div className="myscore__display">
        <p className="myscore__style"> SCORE </p>
        <p className="myscore__points"> {winCount} </p>
      </div>
</div>
    <div className="mybody__display">
        <p className="myfont__text"> YOU PICKED </p>
        <span className={data.playerChoice == "paper"? "mydot": data.playerChoice === "rock"? "mydot2":"mydot1"}></span>
        <img className={data.playerChoice == "paper"? "mypaper": data.playerChoice === "rock"? "myscissor":"myrock"} 
        src= {data.playerChoice === "paper"?paper:data.playerChoice === "rock"?rock:scissor}/>
    </div>

    <div className='rulesdisplay'>
    <button className='rulesGames'  onClick={handleClickToOpen}>RULES</button>
      <Dialog open={open} onClose={handleToClose}>
                <DialogTitle  className='rules_font' disableTypography="true">RULES</DialogTitle>
                <img className='close' onClick={handleToClose} src={close}/>
                <DialogContent>
                <img className="rules__img"src={rules}/>
                </DialogContent>
            </Dialog>
    </div>
    <div className="mycomputer__display">
        <p className="mycomputer__text"> THE HOUSE PICKED </p>
        <span className= {showComputerChoice == false? "mySpinner": 
        computerChoice == "paper"? "computerdot": computerChoice === "rock"? "computerdot2":"computerdot1"  }></span> 
         <div style={{display: !showComputerChoice? "block":"none"}}>
        <SyncLoader className='mySpinner'
            color={'white'}
            loading={true}
            size={15}
          />  
          </div>
        <div style={{display: showComputerChoice? "block":"none"}}>
        <img className= "computeroption"
        src= {computerChoice === "paper"?paper:computerChoice === "rock"?rock:scissor}/>
        </div>
    </div>


    <div style={{display: showComputerChoice? "block":"none"}} className='result'>
{result == "WIN"?
        <p className="mycomputer__text2"> YOU WIN </p> : 
        result == "TIE" ?
        <p className="mycomputer__text2"> TIE </p> : <p className="mycomputer__text2"> YOU LOSE </p> 
}

<button className='play_again'  onClick={handleClick}>PLAY AGAIN</button>
    </div>

    
    {result == "WIN" ?<Confetti height={height} width={width} wind="200"/> : ""}
   
    </>
    );
};



export default Game;