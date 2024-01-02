import "./index.css"

export const WinLoose = (props)=>{
    const {details,keyd,chance} = props 
    return(
        <div>
            {details?(<div>
                <h1>Congratulations You Won</h1>
            </div>):(chance===0?(<h1>OOPS TRY AGAIN LATER</h1>):(<h1>{keyd}</h1>))}
        </div>
    )

}
