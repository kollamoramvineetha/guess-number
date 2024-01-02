import {Component} from "react"
import {WinLoose} from "../components/WinLoose"
import "./index.css"
export class GuessNumber extends Component{
    state ={a:"",correct:false,rand:"",isGameStarted:true,s:"",noOfChances:6}

    onRandomGenerate=()=>{
        const {isGameStarted} = this.state
        if(isGameStarted){
            this.setState({rand:Math.floor(Math.random()*100 + 1)})
        }
    }

    onTextChange=(event)=>{
        this.onRandomGenerate()
        this.setState({a:event.target.value})
    }

    onFormSubmit=(event)=>{
        event.preventDefault()
        const {a,rand,noOfChances}=this.state
        console.log(a,rand,noOfChances)
        if(parseInt(a)===parseInt(rand)){
            this.setState({isGameStarted:true,correct:true,a:"",noOfChances:6,s:""})
        }
        else if(noOfChances<=6 && noOfChances>0){
            if(parseInt(a)<parseInt(rand)){
                this.setState({isGameStarted:false,correct:false,a:"",s:`Number is greater than ${a}`})
            }
            else{
                if(a===""){
                    this.setState({isGameStarted:false,correct:false,a:"",s:"Enter Input"})
                }
                else{
                    this.setState({isGameStarted:false,correct:false,a:"",s:`Number is less than ${a}`})
                }
            }
            this.setState({noOfChances:noOfChances-1})
        }
        else{
            this.setState({isGameStarted:true,correct:false,a:"",s:"OOPS Chances Completed Try Again"})
            this.setState({noOfChances:6})
        }
    }

    onRestart=()=>{
        this.setState({isGameStarted:true,correct:false,a:"",s:"Restart Your Game",noOfChances:6})
    }

    render(){
        const {a,correct,s,noOfChances} = this.state
        const isActive = noOfChances>0 && noOfChances<=6 ? false:true
        return(
            <div className="card">
                <div className="card2">
                <h1>GUESS MY NUMBER <br/> <span>YOU HAVE ONLY SIX CHANCES ALL THE BEST</span></h1>
                    <div className="card1">
                        <input type="number" value={a} onChange={this.onTextChange} disabled={isActive} placeholder="Enter Guess Number" /><br/>
                        <button type="button" onClick={this.onFormSubmit}>Submit </button><br/>
                        <button type="button" onClick={this.onRestart}>Try Again</button><br/>
                        <WinLoose details={correct} keyd={s} chance={noOfChances}/>
                    </div>
                </div>
            </div>
        )
    }

}
