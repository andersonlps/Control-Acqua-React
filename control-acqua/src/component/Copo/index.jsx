import { useState } from 'react'
import './styles.css'


const Copo = () => {

    const [count, setCount] = useState(0)
    const [ml, setMl] = useState(0)
    const [total, setTotal] = useState("")
    const [totalMl, setTotalMl] = useState(0)
    const [relatorio, setRelatorio] = useState("")
    const [meta, setMeta] = useState("")
    const date = new Date().toLocaleString();

    const Clique = () => {
        
        if (ml == 0) {
            alert("Preencha o ml do copo")
        }

        if (totalMl == meta) {

            alert("PARABÉNS! META DIÁRIA BATIDA!!!")

        }

        setCount(count + 1)
        setTotalMl(count * ml)
        setRelatorio(prevState => prevState + "Último copo de água bebido às " + date)

    }

    const Reiniciar = () => {
        setCount(0)
        setMl("")
        setTotal("")
        setTotalMl("")
        setRelatorio("")
        setMeta("")
    }

    const Finalizar = () => {

        setTotal('Total de copos bebidos ' + count + " ou " + (count * ml) + "ml de água")

    }

    return (
        <div className='container'>
            <div className='box-login'>
                <div className='titulo'>
                    <h1>🥤Controle de Consume De Água diário🥤</h1>
                </div>
                <div className='form-dados'>
                    <div>
                        <h2>Quantos ml tem o copo?</h2>
                        <input
                            placeholder='Digite aqui o ml'
                            type="number"
                            value={ml}
                            onChange={e => setMl(e.target.value)}
                        />
                        <h2>Você tem uma meta diária?</h2>
                        <input
                            placeholder='Digite aqui o ml'
                            type="number"
                            value={meta}
                            onChange={e => setMeta(e.target.value)}
                        />
                        <h3>ML de água ingerido: {totalMl}</h3>
                        <h3>Copos de aguá bebidos: {count}</h3>
                        <h3>{total}</h3>
                        <h3>{relatorio}</h3>
                    </div>
                </div>
                <div className='box-footer'>
                    <button onClick={Clique}>+🥤</button>
                    <button onClick={Reiniciar}>Reiniciar</button>
                    <button onClick={Finalizar}>Finalizar</button>
                </div>
            </div>
        </div>
    )
}

export default Copo