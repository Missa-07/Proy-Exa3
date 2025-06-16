import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Pie from './Pie';
function Pelicula(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className='Row'></div>
      <div>
        <Button color="danger" onClick={toggle}>
          SPIDER-MAN
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Luego de sufrir la picadura de una araña genéticamente modificada, un estudiante de secundaria tímido 
            y torpe adquiere increíbles capacidades como arácnido. Pronto comprenderá que su misión es utilizarlas 
            para luchar contra el mal y defender a sus vecinos.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          CAPITAN AMERICA
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            "Capitán América: El Primer Vengador" nos introduce a Steve Rogers, un joven débil pero de gran corazón 
            que, durante la Segunda Guerra Mundial, es transformado en el súper soldado Capitán América gracias a un 
            suero experimental. Armado con un escudo de Vibranium, lidera la lucha contra HYDRA y su temible líder, 
            Cráneo Rojo, quien busca un poder cósmico para dominar el mundo. Tras frustrar los planes de Cráneo Rojo 
            y estrellar su avión para salvar a Nueva York, el Capitán América queda congelado en el Ártico, 
            despertando setenta años después en un mundo moderno y desconocido, listo para unirse a Los Vengadores.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          IRON-MAN
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            La película "Iron Man" presenta a Tony Stark, un brillante e irreverente ingeniero y magnate de la 
            industria armamentística que, tras ser secuestrado en Afganistán y gravemente herido por una de sus 
            propias armas, es forzado a construir un misil. En lugar de cumplir, Tony diseña y construye 
            secretamente una rudimentaria armadura motorizada para escapar. De vuelta en casa, y con una nueva 
            perspectiva sobre el impacto de su empresa, decide usar su genio para desarrollar una armadura de alta 
            tecnología, convirtiéndose en el héroe Iron Man, quien lucha contra el terrorismo y la corrupción, 
            enfrentándose a su socio Obadiah Stane, quien busca replicar la tecnología para sus propios fines 
            malvados.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          ANT-MAN
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            "Ant-Man" sigue a Scott Lang, un ex-convicto con buen corazón que es reclutado por el Dr. Hank Pym, el 
            Ant-Man original, para robar una peligrosa tecnología de encogimiento desarrollada por el ambicioso 
            Darren Cross. Entrenado para usar un traje que le permite reducir su tamaño y controlar hormigas, 
            Scott se convierte en el nuevo Ant-Man, infiltrándose en las instalaciones de Cross con la ayuda de 
            Hope van Dyne, la hija de Pym. La misión culmina en una batalla climática donde Ant-Man debe detener a 
            Cross y su traje Yellowjacket, demostrando que incluso el héroe más pequeño puede tener un impacto 
            gigante.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          THOR
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            La película "Thor" narra la historia de Thor, un arrogante pero poderoso príncipe de Asgard que, al 
            desobedecer a su padre Odín y provocar una guerra, es despojado de sus poderes y desterrado a la Tierra. 
            Allí, en Nuevo México, conoce a la astrofísica Jane Foster y su equipo, quienes lo ayudan a adaptarse 
            a su nueva realidad mientras él busca recuperar su martillo, Mjolnir, y con él su dignidad y poderes. 
            Mientras tanto, en Asgard, su envidioso hermano adoptivo Loki urde un plan para usurpar el trono, 
            enviando al imparable Destructor a la Tierra para eliminar a Thor. Thor debe probar su valía, 
            sacrificándose por los inocentes, para recuperar sus habilidades, enfrentar a Loki y proteger ambos 
            mundos, aprendiendo la verdadera esencia de un héroe.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color="danger" onClick={toggle}>
          DOCTOR STRANGE
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            "Doctor Strange" nos presenta al arrogante y brillante neurocirujano Stephen Strange, cuya vida da un 
            giro devastador cuando un accidente automovilístico le deja las manos gravemente dañadas, acabando con 
            su carrera. Desesperado por encontrar una cura, gasta su fortuna en tratamientos inútiles hasta que 
            escucha sobre un hombre que se recuperó milagrosamente gracias a la magia. Esto lo lleva a Kamar-Taj 
            en Nepal, un lugar oculto donde es introducido al mundo de las artes místicas por La Anciana. A pesar 
            de su escepticismo inicial, Strange descubre dimensiones y poderes inimaginables, aprendiendo a 
            manipular la realidad, lanzar hechizos y viajar a través del multiverso. Rápidamente se convierte en 
            un poderoso hechicero, usando su genio científico de una nueva manera. Finalmente, Strange debe 
            enfrentar a Kaecilius, un exdiscípulo renegado de La Anciana, quien busca invocar a la entidad 
            Dormammu de la Dimensión Oscura para fusionar la Tierra con ella. En un audaz acto de sacrificio y 
            manipulación temporal usando el Ojo de Agamotto (una Gema del Infinito), Strange atrapa a Dormammu 
            en un bucle de tiempo infinito, forzándolo a retirarse y salvando al planeta, aceptando así su nuevo 
            rol como protector místico de la Tierra.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              VER
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <Pie></Pie>

    </>

  );
}

export default Pelicula;