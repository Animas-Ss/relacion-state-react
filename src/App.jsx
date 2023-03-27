import { useState, useEffect } from "react";
import './App.css'

//constante de mi endpoint 
const API_ENDPOINT_RANDOM = 'https://catfact.ninja/fact';
//const API_EMDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_PREFIJO_URL = 'https://cataas.com';


export const App = () => {
    const [fact, setFact] = useState();
    const [imagen, setImagen] = useState()
    //const [firstWord, setFirsrWord] = useState()

    useEffect(() => {
        fetch(API_ENDPOINT_RANDOM)// nos devuelve un objeto con una palabra random
            .then(res => res.json())
            .then(data => {
                const { fact } = data;
                setFact(fact);
            })
    }, []);


    useEffect(() => {
        //validacion por que la primera vez esta vacio el estado entonces no compila ya que no tiene nada que bsucar
        if (!fact) return
        // usamos el split metodo de los arrays que nos permite separar una cadena por lo que nosoros deperminemos
        // lo que colocamos como argumento en el metodo split es el token que va a servir como de separador en este caso el espacio
        //const firstWord = fact.split(' ')[0];
        // si necesitamos mas que la primera palara mas metodos para obtenerla
        //slice determina cuantos elementos del array tomamos
        //join junta estos elementos en una cadena nuevamente los que nso dejaraia una frase con las tres primeras palabras del array con el token que nosotros queremos puede ser el que nos sea util en este caso espacio
        //const firstWord = fact.split(' ').slice(0, 3).join(' ');
        // el split tiene un segundo parametro que nos permite decidir cuantos elementos nos quedamos en este caso ponemos 3 y juntamos con join
        const firstWord = fact.split(' ', 3).join(' ');
        console.log(firstWord);
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImagen(url);
            })
    }, [fact])


    return (
        <main>
            <div className="frase">
                <div className="description">
                    <div className="title">
                        <h1>Gatitos App</h1>
                    </div>
                    <div className="frase-1">
                        {fact && <p>{fact}</p>}{/* //renderizado condicional */}
                    </div>
                </div>
                <div className="frase-img">
                    {imagen && <img src={`${CAT_PREFIJO_URL}${imagen}`} alt={`imagen extraida por las tres primeras palabras de ${fact}`} />}
                </div>
            </div>
        </main>
    )
}