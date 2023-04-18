import mercadopago from "mercadopago";
import nodemailer from "nodemailer";

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN})

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

const controller = {
    create: (req, res) => {

        let data = req.body

        const message = {

            from: process.env.SMTP_USER,
            to: req.user.email,
            subject: "Thank you for your purchase! Below we will show you the details of your order.",
            html: `<div  style=" text-align:center;" > 
            <img  style="width: 100%; " src="http://localhost:3000/static/media/logo.69cd86d90139cc3bb574.png" alt="photo" /> 
            <h3 style="font-size:20px; text-align:center">Thank you for your purchase!</h3>
            <p style="font-size:16px; text-align:center">Below we will show you the details of your order:</p>
            
              <p>"Enjoy our products and we look forward to showing you our latest updates!"</p>
            </div>`

        };
        let preference = {
            
                items: [
                    {
                        id: data.id,
                        title: "Productos: "+data.name.split(",").length,
                        currency_id: "ARS",
                        unit_price: data.price,
                        quantity: 1
                    }
                ],
            payer: {
                name: req.user.name
            },
            back_urls: {
                success: "http://localhost:3000/profile",
                failure: "http://localhost:3000/profile",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
        };
        console.log(preference)

        mercadopago.preferences
            .create(preference)
            .then((response) =>{
                transporter.sendMail(message, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Email sent: " + info.response);
                    }
                });
                res.status(200).json({ response });
            })
            .catch((error) => res.status(400).json({ error: error.message }));
    }
}

export default controller