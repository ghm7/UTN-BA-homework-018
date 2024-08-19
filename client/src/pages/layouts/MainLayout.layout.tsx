import { ReactElement, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar.component';
import Modal from '../../components/Modal/Modal.component';

// import WritingMachine from '/assets/images/writing-machine.png';
import WritingMachine from '../../assets/images/writing-machine.png';

export default function MainLayout(): ReactElement {
  const [openAgeModal, setOpenAgeModal] = useState(true);
  const [openEULAModal, setOpenEULAModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className={isModalOpen ? 'overflow-hidden h-[100dvh]' : ''}>
      <Modal
        open={openAgeModal}
        onClose={() => {
          setOpenAgeModal(false);
          setOpenEULAModal(true);
        }}
        twoBtnModal={{ acceptBtn: 'Soy mayor', declineBtn: 'Salir' }}
        hasBackdrop={false}
      >
        <div className="w-[600px]">
          Este sitio web contiene imágenes que pueden herir la sensibilidad de
          menores de 18 años. Por favor lea nuestros Términos y condiciones a
          continuación
        </div>
      </Modal>

      <Modal
        open={openEULAModal}
        onClose={() => {
          setOpenEULAModal(false);
          setIsModalOpen(false);
        }}
        twoBtnModal={{ acceptBtn: 'Aceptar', declineBtn: 'Cancelar' }}
        hasBackdrop={false}
      >
        <div className="w-[900px] flex flex-col gap-5">
          <img
            src={WritingMachine}
            alt="Máquina de escribir con partitura"
            className="w-[300px] m-auto"
          />
          <p>
            1-Todas las imágenes aquí expuestas son propiedad intelectual de
            Augusto Pozzi Luzardo y están regidas por los derechos de autor.
          </p>
          <p>
            2-No está permitida la descarga ni almacenamiento en ningún
            dispositivo por ningún medio conocido o por conocerse, incluida la
            captura de pantalla.
          </p>
          <p>
            3-Este sitio web funciona igual que una galería de arte. Usted puede
            visitarla, pero si quiere tener en su poder una imagen debe pagar
            por ella.
          </p>
          <p>
            4-Una vez que usted compre una imagen se le dará de baja
            inmediatamente del sitio web para que nadie más pueda comprarla,
            asegurándose así la exclusividad de la imagen.
          </p>
          <p>
            5-Usted podrá almacenarla en todos los dispositivos que desee y
            compartirla cuántas veces quiera.
          </p>
          <p>
            6-Lo que no podrá hacer bajo ningún concepto es publicarla,
            revenderla o editarla ya que la imagen está protegida por las leyes
            de derechos de autor.
          </p>
          <p>
            7-Advertimos que este sitio contenía imágenes que podían herir la
            sensibilidad de menores de 18 años. Si usted entró a este sitio web
            y es menor de edad nos deslindamos de cualquier acción judicial en
            nuestra contra.
          </p>

          <p>
            8-Quienes infrinjan estos Términos y condiciones serán pasibles de
            una acción judicial.
          </p>

          <p>
            9-Las imágenes vendidas se entregarán vía correo electrónico o
            mediante un link de descarga, en un tamaño que va de los 16
            megapíxeles a los 64 megapíxeles, esto dependerá del tamaño original
            de la imagen, lo que permitirá impresiones en calidad fotográfica
            que van de los 41,7 x 27,6 cms. hasta 166,8 x 110,4 cms.
          </p>

          <p className="font-bold flex justify-center gap-2">
            ¿Aceptas los términos de condiciones?
          </p>
        </div>
      </Modal>

      <Navbar />
      <Outlet />
    </div>
  );
}
