import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Contacto() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
    emailjs
        .send("service_9nvxykq", "template_v8vrvqe", data, "sImjQBlgS34Vs7SGu")
        .then(() => {
        alert("Mensaje enviado con éxito");
        reset();
        })
        .catch(() => {
        alert("Error al enviar el mensaje");
        });
    };

    return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>

        <input
            {...register("name")}
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border rounded"
            required
        />

        <input
            {...register("email")}
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 border rounded"
            required
        />

        <textarea
            {...register("message")}
            placeholder="Mensaje"
            className="w-full p-3 border rounded h-32 resize-none"
            required
        />

        <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
        >
            Enviar mensaje
        </button>
        </form>
    </section>
    );
}
