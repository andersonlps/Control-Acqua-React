import { useState } from 'react'
import './styles.css'


const Copo = () => {

    const [count, setCount] = useState(1)
    const [ml, setMl] = useState("")
    const [total, setTotal] = useState("")
    const [totalMl, setTotalMl] = useState("")
    const [relatorio, setRelatorio] = useState([])
    const [meta, setMeta] = useState("")
    const [mensagem, setMensagem] = useState("")
    var input = document.getElementById('ml')
    var data = new Date().toLocaleString();

    const Clique = () => {

        if ((ml == 0) || (meta == 0)) {
            alert("Preencha o ML")
        } else {

            if (count * ml >= meta) {
                setMensagem("PARABÉNS! META DIÁRIA BATIDA!")
            }

            input.disabled = true
            setCount(prevState => prevState + 1)
            setTotalMl(parseFloat(count) * parseFloat(ml))
            setRelatorio([...relatorio, "Água bebida às :" + data]);
        }
    }

    const Reiniciar = () => {
        setCount(1)
        setMl("")
        setTotalMl(0)
        setTotal("")
        setRelatorio([])
        setMeta("")
        setMensagem("")
        input.disabled = false
    }


    return (
        <div className='container'>
            <div className='box-login'>
                <div className='titulo'>
                    <h1>🥤Controle de Consumo De Água Diário🥤</h1>
                </div>
                <div className='form-dados'>
                    <div>
                        <h2>Quantos ml tem o copo?</h2>
                        <input
                            id='ml'
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
                        <h3>Copos de aguá bebidos: {(count - 1)}</h3>
                        <h3>{mensagem}</h3>
                        <h3>{total}</h3>
                    </div>
                </div>
                <div className='box-footer'>
                    <button id='countMl' onClick={Clique}>+🥤</button>
                    <button onClick={Reiniciar}>Reiniciar</button>
                </div>
                <div className='relatorio'>
                    {<ul className='lista'>{relatorio.map(relatorios => <li key={relatorios}>{relatorios}</li>)}</ul>}
                </div>
            </div>
        </div>
    )
}

export default Copo