import { useState } from "react"

export function Chat() {
    const [textChats, setTextChats] = useState<Array<string>>([])
    const [inputText, setInputText] = useState("")
    function sendText(){
        setTextChats([...textChats, inputText])
        setInputText("")
    }
    return(
        <div>
            <h3>test</h3>
            <div style={{height: "500px", width: "300px", border: "solid 1px black", position: "relative"}}>
                {textChats.map((text) =>
                (<><span>{text}</span><br/></>))}
                <div style={{position: "absolute", bottom: "0", left: "0"}}>
                    <input value={inputText} onChange={e => setInputText(e.target.value)} type="text" style={{border: "solid 1px black", width: "300px"}}/>
                    <button onClick={sendText} type="button" style={{cursor: "pointer"}}>Send</button>
                </div>
            </div>
        </div>
        )
}