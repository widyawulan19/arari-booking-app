import React, { useState } from 'react'
import '../../styles/Landing/Highlights.css'
import logo from '../../assets/logo4.png'
import PreviewModal from '../../components/PreviewModal';

function CTA() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () =>{
        setOpenModal(true)
    }
    const handleCloseModal = () =>{
        setOpenModal(!openModal)
    }

  return (
    <div className='cta-container'>
        <div className="cta-box">
            <div className="cta-left">
                <button onClick={handleOpenModal}>Ready To Play?</button>
                <h3>Start Your Sports Journey Today</h3>
                <p>Create an account to save your favorite courts, manage bookings on the go, and get exclusive member discounts.</p>
                <div className="cta-btn">
                    <button onClick={handleOpenModal} className='primary-btn'>Book Your First Session</button>
                    <button onClick={handleOpenModal} className='sub-btn'>Contact Admin</button>
                </div>
            </div>

            <div className="cta-right">
                <img src={logo} alt="" />
            </div>
           
        </div>

        {/* open modal  */}
        {openModal && (
            <PreviewModal
                isOpen={openModal}
                onClose={handleCloseModal}
            />
        )}
    </div>
  )
}

export default CTA