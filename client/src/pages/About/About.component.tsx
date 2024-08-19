import { ReactElement } from 'react';

// import portrait from '/assets/images/about/portrait.png';
import './About.styles.css';

export default function About(): ReactElement {
  return (
    <section className="flex justify-center portrait-background">
      <div className="w-[95%] grid grid-cols-2">
        <div></div>
        <div className="flex flex-col gap-5 leading-5 pt-10 pb-10 ml-5">
          <p>
            Augusto Pozzi Luzardo fue durante 10 años humorista gráfico. Publicó
            en las revistas EL DEDO y GUAMBIA, en el diario LA HORA, en las
            revistas EL PAPUS, BALALAIKA y EL CUERVO en España, mientras vivió
            allí y en los principales semanarios montevideanos de la década del
            80 (OPINAR, AQUÍ, LAS BASES, ORSAI, PROHIBIDA, LENGUA LARGA, EL TIC
            TAC, entre otros). Ya de regreso un libro salió a la luz:
            &lt;&lt;JESÚS, QUÉ CRISIS!!!&gt;&gt; que recopilaba los chistes de
            GUAMBIA.
          </p>
          <p>
            Años después entró al Taller de dibujo de OSCAR LARROCA, el conocido
            y premiado artista plástico uruguayo, en la ciudad de Florida. Al
            poco tiempo de haber ingresado al taller, montó una exposición en el
            CENTRO CULTURAL de esa localidad. La exposición en sí eran
            básicamente grafitos y algún que otro dibujo hecho a lápiz del
            cuerpo desnudo de quien pasaría a ser, tiempo después su segunda y
            última esposa.
          </p>
          <p>
            La exposición llevó por nombre EL/LA. Fue el propio OSCAR LARROCA
            quien escribió el folleto y también el encargo de la magistral
            colgada, con paneles de cartón y vidrio, con espacios vacíos entre
            los dibujos, creando todo un recorrido lineal, pero a la vez
            sinuoso, que guiaban a los ojos por el recorrido de toda la muestra.
          </p>
          <p>
            Pero au9usto, como a él le gusta llamarse (por 2 razones: una porque
            la &lt;&lt;g&gt;&gt; y el &lt;&lt;9&gt;&gt; son muy parecidos y otra
            por la numerología, la suma total de los números de su fecha de
            nacimiento 18/01/1961 es igual a 9), se jubiló y ya no tiene el
            pulso de un pibe de 34 años.
          </p>
          <p>
            Así que si quiere expresarse de manera artística tiene que recurrir
            a estas 2 nuevas herramientas: la inteligencia artificial y la
            edición digital de la imagen. Y en eso anda…
          </p>
        </div>
      </div>
    </section>
  );
}
