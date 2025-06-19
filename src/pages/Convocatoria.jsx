import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const SEMESTRES = [
  "II", "III", "IV", "V", "VI", "VII", "VIII"
];

export default function Convocatoria() {
  const { t } = useTranslation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    // Aquí puedes conectar con un backend o servicio de email
    alert("¡Tu postulación ha sido enviada exitosamente!");
    reset();
  };

  return (
    <section className="h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 p-2 md:p-4 relative overflow-hidden">
      <div className="grid grid-cols-12 w-full max-w-7xl mx-auto">
        <div className="col-span-12 md:col-span-8 md:col-start-3 flex flex-col md:flex-row items-center justify-center relative z-10 gap-8 md:gap-16">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-2 md:p-4 rounded-lg shadow-md w-full max-w-full space-y-2 relative z-10 flex-shrink-0">
            <h2 className="text-3xl font-bold mb-6 text-center text-principal mt-16">{t('convocatoria.title')}</h2>
            <p className="text-center text-gray-600 mb-6">{t('convocatoria.subtitle')}</p>
            {/* Nombres y Apellidos */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <input
                  {...register("nombres", { required: true })}
                  type="text"
                  placeholder={t('convocatoria.nombres')}
                  className="w-full p-3 border rounded"
                />
                {errors.nombres && <span className="text-red-500 text-sm">{t('convocatoria.error_obligatorio')}</span>}
              </div>
              <div>
                <input
                  {...register("apellidos", { required: true })}
                  type="text"
                  placeholder={t('convocatoria.apellidos')}
                  className="w-full p-3 border rounded"
                />
                {errors.apellidos && <span className="text-red-500 text-sm">{t('convocatoria.error_obligatorio')}</span>}
              </div>
            </div>

            {/* Carrera y Código */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <input
                  {...register("carrera", { required: true })}
                  type="text"
                  placeholder={t('convocatoria.carrera')}
                  className="w-full p-3 border rounded"
                  list="carreras-list"
                  autoComplete="off"
                />
                {errors.carrera && <span className="text-red-500 text-sm">Este campo es obligatorio</span>}
              </div>
              <div>
                <input
                  {...register("codigo", {
                    required: true,
                    validate: value => /^\d{6}$/.test(value)
                  })}
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder={t('convocatoria.codigo')}
                  className="w-full p-3 border rounded"
                />
                {errors.codigo && <span className="text-red-500 text-sm">{t('convocatoria.error_codigo')}</span>}
              </div>
            </div>

            <input
              {...register("email", { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}
              type="email"
              placeholder={t('convocatoria.email')}
              className="w-full p-3 border rounded"
            />
            {errors.email && <span className="text-red-500 text-sm">{t('convocatoria.error_email')}</span>}

            {/* Agrupar Teléfono, Edad y Ciudad en una fila */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <input
                  {...register("telefono", { required: true })}
                  type="tel"
                  placeholder={t('convocatoria.telefono')}
                  className="w-full p-3 border rounded"
                />
                {errors.telefono && <span className="text-red-500 text-sm">{t('convocatoria.error_obligatorio')}</span>}
              </div>
              <div>
                <input
                  {...register("edad", { required: true, min: 15, max: 99 })}
                  type="number"
                  placeholder={t('convocatoria.edad')}
                  className="w-full p-3 border rounded"
                />
                {errors.edad && <span className="text-red-500 text-sm">{t('convocatoria.error_edad')}</span>}
              </div>
              <div>
                <input
                  {...register("ciudad", { required: true })}
                  type="text"
                  placeholder={t('convocatoria.ciudad')}
                  className="w-full p-3 border rounded"
                />
                {errors.ciudad && <span className="text-red-500 text-sm">{t('convocatoria.error_obligatorio')}</span>}
              </div>
            </div>

            {/* SEMESTRE */}
            <select
              {...register("semestre", { required: true })}
              className="w-full p-3 border rounded bg-white"
              defaultValue=""
            >
              <option value="" disabled>{t('convocatoria.semestre_placeholder')}</option>
              {SEMESTRES.map((sem) => (
                <option key={sem} value={sem}>{sem}</option>
              ))}
            </select>
            {errors.semestre && <span className="text-red-500 text-sm">{t('convocatoria.error_semestre')}</span>}

            <textarea
              {...register("motivo", { required: true })}
              placeholder={t('convocatoria.motivo')}
              className="w-full p-3 border rounded h-24 resize-none"
            />
            {errors.motivo && <span className="text-red-500 text-sm">{t('convocatoria.error_motivo')}</span>}

            {/* EXPERIENCIA PREVIA CHECKBOX */}
            <div className="flex items-center gap-2">
              <input
                {...register("experiencia_previa")}
                type="checkbox"
                id="experiencia_previa"
                className="h-4 w-4"
              />
              <label htmlFor="experiencia_previa" className="text-gray-700 select-none">{t('convocatoria.experiencia_previa')}</label>
            </div>

            <input
              {...register("disponibilidad", { required: true })}
              type="text"
              placeholder={t('convocatoria.disponibilidad')}
              className="w-full p-3 border rounded"
            />
            {errors.disponibilidad && <span className="text-red-500 text-sm">{t('convocatoria.error_disponibilidad')}</span>}

            <button
              type="submit"
              className="w-full bg-principal text-white p-3 rounded hover:bg-green-700 transition font-bold text-lg"
            >
              {t('convocatoria.enviar')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 