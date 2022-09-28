import mercadopago from 'mercadopago';


export const crearOrden = async (req, res) => {
    var mercadopago = require('mercadopago');
    mercadopago.configure({
        access_token: 'TEST-4946701075166761-090521-b692e61dee15409dba17fe582ca20f17-509583078'
    });

    var preference = {
        items: [
            {
                title: 'Entrada',
                quantity: 1,
                currency_id: 'ARS',
                unit_price: 1000
            }
        ],
        notification_url: 'mp-production-d50c.up.railway.app/notificacionOrden'
    };

    (await mercadopago.preferences.create(preference)
        .then((r) => {
            res.json(r);
        })
        .catch((e) => {
            console.log(e)
        })
    )
    res.send("Hola")
}
export const notificacionOrden = async (req, res) => {
    const datos = req.query;
    console.log(datos);
    res.status(200)
}
