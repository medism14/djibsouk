import React from 'react'
import googlePlay from '../../assets/googlePlay.jpeg';
import appStore from '../../assets/appStore.png';
import { faFacebook, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <section className="bg-[--primary] w-full text-[--light] flex flex-col mt-[60px]">
        {/* Partie haute */}
        <div className="flex justify-between pt-[30px] lg:px-[--lg-resp]">
          {/* Nos applications */}
          <div className="flex flex-col space-y-[20px]">
            <div className="w-[300px] border-b-[3px] border-[#4F4F4F]">
              <h2 className="text-2xl font-[600]">Nos applications</h2>
            </div>

            <div className='flex flex-col space-y-[15px]'>
              <a href="#"><img src={googlePlay} className='w-[200px]'/></a>
              <a href="#"><img src={appStore} className='w-[200px]'/></a>
            </div>
          </div>

          {/* A propos de nous */}
          <div className="flex flex-col space-y-[20px]">
            <div className="w-[300px] border-b-[3px] border-[#4F4F4F]">
              <h2 className="text-2xl font-[600]">A propos de nous</h2>
            </div>

            <div className='flex flex-col space-y-[15px]'>
              <a href="#" className='flex space-x-[7px] items-center transition-all duration-300 hover:text-[--accent-blue]'><FontAwesomeIcon icon={faChevronRight} /> <span>Politiques de confidentialités</span></a>
              <a href="#" className='flex space-x-[7px] items-center transition-all duration-300 hover:text-[--accent-blue]'><FontAwesomeIcon icon={faChevronRight} /> <span>Conditions générales d'utilisations</span></a>
              <a href="#" className='flex space-x-[7px] items-center transition-all duration-300 hover:text-[--accent-blue]'><FontAwesomeIcon icon={faChevronRight} /> <span>Nous contacter</span></a>
              <a href="#" className='flex space-x-[7px] items-center transition-all duration-300 hover:text-[--accent-blue]'><FontAwesomeIcon icon={faChevronRight} /> <span>Qui sommes-nous</span></a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-col space-y-[20px]">
            <div className="w-[300px] border-b-[3px] border-[#4F4F4F]">
              <h2 className="text-2xl font-[600]">Liens rapides</h2>
            </div>

            <div className='flex flex-col space-y-[15px]'>
              <a href="#" className='flex space-x-[7px] items-center transition-all duration-300 hover:text-[--accent-blue]'><FontAwesomeIcon icon={faChevronRight} /> <span>Vehicules</span></a>
              <a href="#" className='flex space-x-[7px] items-center transition-all duration-300 hover:text-[--accent-blue]'><FontAwesomeIcon icon={faChevronRight} /> <span>Immobiliers</span></a>
              <a href="#" className='flex space-x-[7px] items-center transition-all duration-300 hover:text-[--accent-blue]'><FontAwesomeIcon icon={faChevronRight} /> <span>Multimédia</span></a>
            </div>
          </div>
        </div>

        <div className='flex space-x-[40px] justify-center py-[40px] border-b-2 border-[#4F4F4F] px-[--lg-resp]'>
          <a href=""> <FontAwesomeIcon className="text-[35px]" icon={faFacebook}></FontAwesomeIcon></a>
          <a href=""> <FontAwesomeIcon className="text-[35px]" icon={faInstagram}></FontAwesomeIcon></a>
          <a href=""> <FontAwesomeIcon className="text-[35px]" icon={faXTwitter}></FontAwesomeIcon></a>
          <a href=""> <FontAwesomeIcon className="text-[35px]" icon={faLinkedin}></FontAwesomeIcon></a>
        </div>

        {/* Partie basse */}
        <div className="flex justify-center text-[--secondary] py-[30px] ">
            © DjibSouk | 2024
        </div>
    </section>
  )
}
