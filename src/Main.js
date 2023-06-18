import { useState,useEffect } from "react";
import "./Main.css"
import Lista from "./Lista.js"

export default function Main(){
    
    //variabili
    const [valInput, setValInput] = useState("");
    const [arr, setArr] = useState(()=>{
        return JSON.parse(localStorage.getItem("TODO_SALVATI")) || []
    });
    
    //prende dati da locale
    useEffect(()=>{
        const data = JSON.parse(window.localStorage.getItem("TODO_SALVATI"));
        setArr(data); //rende valore
        

    },[])   //vuoto perchè voglio che la funzione venga avviata solo la prima volta che il sito viene avviato

    //salva locale
    useEffect(()=>{
        window.localStorage.setItem("TODO_SALVATI", JSON.stringify(arr)) //rende stringa
    },[arr]);//useEffect viene runnato ogni volta che il valore in acc cambia o all'inizio quando viene avviato applicazione

    //funzioni
    function submittato(e, val){
        e.preventDefault();     //non fa ricaricare la pagina
        if(valInput.trim()==="")return;      //se l'utente dà solo spazi, non accetta l'input
        const copiaArr = [...arr,{valore: val, id: crypto.randomUUID()}];         //mette il nuovo valore inserito in una copia dell'array
        setArr(copiaArr);       //setta arr come copiaArr


        setValInput("");    //svuota lo spazio dell'input
    }

    function cancella(idPassato){   // chiamato nella lista, cancella il Item con l'id richiesto

        const cancellato = arr.filter(val=>{    //crea un nuovo array senza l'elemento tolto
            if(val.id !== idPassato){
                return val;
            }
            return null;
        })

        setArr(cancellato);     //aggiorna l'array
    }

    //ritorno
    return (
        <>
            <header>
                <h1>Lista dei Todo</h1>
                <p>Aggiungi e modifica</p>
            </header>
            <main>
                <form  autoComplete="off" onSubmit={ event => submittato(event, valInput) }>
                <input type="text" id="in" value={valInput} onChange={ e=>setValInput(e.target.value) } className="input modifica" placeholder="-_-"/>
                <button className="modifica btn btn-inserisci">Inserisci</button>
                </form>
                <Lista array = { arr } cancella = {cancella}/>
            </main>
        </>
    )
}