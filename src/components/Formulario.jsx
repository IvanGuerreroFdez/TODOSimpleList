import { useState } from "react";

function Formulario ({ tareasimple }) {
    const [data, setData] = useState({
        texto: '',
        priority: 'Baja'
    });

    const handleChange = (event, field) => {
        setData({
            ...data,
            [field]: event.target.value
        });
    }

    const handleSend = (event) => {
        event.preventDefault();
        tareasimple(data)
    }

    return <div>
        <form onSubmit={handleSend}>
            <div>
                <label>Texto</label>
                <input type="text" onChange={(event) => handleChange(event, 'texto')}/>
            </div>
            <div>
                <label>Priority</label>
                <select onChange={(event) => handleChange(event,'priority')}>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
            </div>
            <button onClick={handleSend}>Enviar</button>
        </form>
    </div>
}
export default Formulario;