import mercadopago from "mercadopago";

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN})

const controller = {
    create: (req, res) => {

        let data = req.body[0]
        console.log(data)

        let preference = {
            items: [
                {
                    id: data._id,
                    title: data.name,
                    currency_id: "ARS",
                    unit_price: data.price,
                    quantity: 1
                }
            ],
            payer: {
                name: req.user.name
            },
            back_urls: {
                success: "https://localhost:3000/store",
                failure: "",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
        };
        console.log(preference)

        mercadopago.preferences
            .create(preference)
            .then((response) => res.status(200).json({ response }))
            .catch((error) => res.status(400).json({ error: error.message }));
    }
}
export default controller