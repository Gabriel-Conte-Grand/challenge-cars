import React from "react";

export const Newsletter = () => {
  return (
    <section className="w-full bg-[#102C79] py-14">
      <div className="max-w-[1300px] mx-auto flex  gap-14">
        <div className="flex flex-col w-80 text-white text-left gap-[30px]">
          <span className="font-bold w-72 text-lg">
            ¿Quieres estar al tanto de nuestras novedades?
          </span>
          <span className="text-sm font-normal">
            Suscríbete a nuestro newsletter y mantente al día con nuestras
            novedades, lanzamientos de productos y ofertas exclusivas.
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <form className="flex gap-6 items-baseline-last">
            <div className="flex flex-col gap-3">
              <label>Nombre</label>
              <input
                value={""}
                type="text"
                onChange={() => {}}
                className="p-3 w-[340px] rounded-lg bg-[#F1F3F6]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Dirección de e-mail</label>
              <input
                value={""}
                type="email"
                onChange={() => {}}
                className="p-3 w-[340px] rounded-lg bg-[#F1F3F6]"
              />
            </div>
            <button className="bg-[#3179BD] rounded-lg py-3 px-10">
              ¡Suscríbete!
            </button>
          </form>
          <div className="flex items-center gap-4">
            <input type="checkbox" className="rounded-xl p-1" />
            <label className="text-xs text-[#7C9AED]">
              Acepto registrarme en la base de datos de Unión de
              Representaciones para recibir información y promociones en esta
              dirección de correo electrónico.
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};
