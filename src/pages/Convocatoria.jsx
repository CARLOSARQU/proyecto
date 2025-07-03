import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const SEMESTRES = [
  "II", "III", "IV", "V", "VI", "VII", "VIII"
];

export default function Convocatoria() {
  const { t } = useTranslation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    // Opcional: define valores por defecto para que el reset funcione correctamente
    defaultValues: {
      nombres: "",
      apellidos: "",
      carrera: "",
      codigo: "",
      email: "",
      telefono: "",
      edad: "",
      ciudad: "",
      semestre: "",
      motivo: "",
      experiencia_previa: false,
      disponibilidad: ""
    }
  });

  const onSubmit = (data) => {
    // Aquí puedes conectar con un backend o servicio de email
    console.log("Datos del formulario:", data);
    alert("¡Tu postulación ha sido enviada exitosamente!");
    reset();
  };

  return (
    // CAMBIOS PRINCIPALES AQUÍ:
    // 1. Se cambia h-screen por min-h-screen para permitir que el contenedor crezca.
    // 2. Se elimina overflow-hidden para permitir el scroll.
    // 3. Se ajusta el padding para mejor visualización en móviles (py-20).
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 py-20 relative">
      <div className="w-full max-w-4xl mx-auto">
        {/* Se elimina la estructura de grid innecesaria para centrar, flex ya lo hace. */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full space-y-4"
          noValidate // Desactiva la validación nativa del navegador para usar solo la de React Hook Form
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t('convocatoria.title')}</h2>
            <p className="text-gray-600 mt-2">{t('convocatoria.subtitle')}</p>
          </div>

          {/* Nombres y Apellidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                {...register("nombres", { required: t('convocatoria.error_obligatorio') })}
                type="text"
                placeholder={t('convocatoria.nombres')}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.nombres && <span className="text-red-500 text-sm mt-1">{errors.nombres.message}</span>}
            </div>
            <div>
              <input
                {...register("apellidos", { required: t('convocatoria.error_obligatorio') })}
                type="text"
                placeholder={t('convocatoria.apellidos')}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.apellidos && <span className="text-red-500 text-sm mt-1">{errors.apellidos.message}</span>}
            </div>
          </div>

          {/* Carrera y Código */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                {...register("carrera", { required: t('convocatoria.error_obligatorio') })}
                type="text"
                placeholder={t('convocatoria.carrera')}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
                list="carreras-list"
                autoComplete="off"
              />
              <datalist id="carreras-list">
                <option value="Ing. Sistemas" />
                <option value="Contabilidad" />
                <option value="Administración" />
              </datalist>
              {errors.carrera && <span className="text-red-500 text-sm mt-1">{errors.carrera.message}</span>}
            </div>
            <div>
              <input
                {...register("codigo", {
                  required: t('convocatoria.error_obligatorio'),
                  pattern: {
                    value: /^\d{6}$/,
                    message: t('convocatoria.error_codigo')
                  }
                })}
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder={t('convocatoria.codigo')}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.codigo && <span className="text-red-500 text-sm mt-1">{errors.codigo.message}</span>}
            </div>
          </div>

          {/* Email */}
          <div>
             <input
                {...register("email", {
                    required: t('convocatoria.error_obligatorio'),
                    pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: t('convocatoria.error_email')
                    }
                })}
                type="email"
                placeholder={t('convocatoria.email')}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
             />
             {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </div>


          {/* Teléfono, Edad y Ciudad */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                {...register("telefono", {
                    required: t('convocatoria.error_obligatorio'),
                    pattern: {
                        value: /^\+?[0-9\s-]{7,15}$/,
                        message: "Introduce un número de teléfono válido."
                    }
                })}
                type="tel"
                placeholder={t('convocatoria.telefono')}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.telefono && <span className="text-red-500 text-sm mt-1">{errors.telefono.message}</span>}
            </div>
            <div>
              <input
                {...register("edad", {
                  required: t('convocatoria.error_obligatorio'),
                  valueAsNumber: true,
                  min: { value: 15, message: t('convocatoria.error_edad') },
                  max: { value: 99, message: t('convocatoria.error_edad') }
                })}
                type="number"
                placeholder={t('convocatoria.edad')}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.edad && <span className="text-red-500 text-sm mt-1">{errors.edad.message}</span>}
            </div>
            <div>
              <input
                {...register("ciudad", { required: t('convocatoria.error_obligatorio') })}
                type="text"
                placeholder={t('convocatoria.ciudad')}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.ciudad && <span className="text-red-500 text-sm mt-1">{errors.ciudad.message}</span>}
            </div>
          </div>

          {/* Semestre */}
          <div>
            <select
              {...register("semestre", { required: t('convocatoria.error_semestre') })}
              className="w-full p-3 border rounded-md bg-white focus:ring-2 focus:ring-green-500"
              defaultValue=""
            >
              <option value="" disabled>{t('convocatoria.semestre_placeholder')}</option>
              {SEMESTRES.map((sem) => (
                <option key={sem} value={sem}>{sem}</option>
              ))}
            </select>
            {errors.semestre && <span className="text-red-500 text-sm mt-1">{errors.semestre.message}</span>}
          </div>

          {/* Motivo */}
          <div>
            <textarea
              {...register("motivo", { required: t('convocatoria.error_motivo') })}
              placeholder={t('convocatoria.motivo')}
              className="w-full p-3 border rounded-md h-28 resize-y focus:ring-2 focus:ring-green-500"
            />
            {errors.motivo && <span className="text-red-500 text-sm mt-1">{errors.motivo.message}</span>}
          </div>

          {/* Experiencia Previa Checkbox */}
          <div className="flex items-center gap-3">
            <input
              {...register("experiencia_previa")}
              type="checkbox"
              id="experiencia_previa"
              className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <label htmlFor="experiencia_previa" className="text-gray-700 select-none">{t('convocatoria.experiencia_previa')}</label>
          </div>

          {/* Disponibilidad */}
           <div>
              <input
                 {...register("disponibilidad", { required: t('convocatoria.error_disponibilidad') })}
                 type="text"
                 placeholder={t('convocatoria.disponibilidad')}
                 className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              {errors.disponibilidad && <span className="text-red-500 text-sm mt-1">{errors.disponibilidad.message}</span>}
           </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-colors font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {t('convocatoria.enviar')}
          </button>
        </form>
      </div>
    </section>
  );
}