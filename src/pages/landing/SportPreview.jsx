import React, { useEffect, useState } from 'react'
import '../../styles/Landing/SportPreview.css'
import { IoChevronForward } from 'react-icons/io5'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import badmintonPic from '../../assets/badminton-card.jpeg'
import tennisPic from '../../assets/tenis-card.jpeg'
import padelPic from '../../assets/padel-card.jpeg'
import PreviewModal from '../../components/PreviewModal';


const sportPreview = [
    {
        id:1,
        name:'Badminton',
        desc: 'Matras berkualitas Olimpiade dengan kepadatan tinggi dan pencahayaan profesional. Sempurna untuk reli kecepatan tinggi dan permainan turnamen kompetitif.',
        img:badmintonPic,
        totalCourt:6
    },
    {
        id:2,
        name:'Tennis',
        desc: 'Lapangan keras ukuran penuh dengan lapisan permukaan premium. Konsistensi pantulan bola yang sangat baik untuk latihan tunggal dan ganda.',
        img:tennisPic,
        totalCourt:3
    },
    {
        id:3,
        name:'Padel',
        desc: 'Lapangan panorama modern dengan kaca tempered 12mm. Rasakan olahraga yang paling cepat berkembang dengan teknologi lapangan premium kami.',
        img:padelPic,
        totalCourt:2
    }
]

function SportPreview() {
    const [openPreviewModal, setOpenPreviewModal] = useState(false);

    useEffect(() => {
    const cards = document.querySelectorAll(".prev-card");

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
            entry.target.classList.add("active");
            }
        });
        },
        {
        threshold: 0.25,
        }
    );

    cards.forEach((card) => observer.observe(card));
    }, []);

    const handleOpenPreview = () =>{
        setOpenPreviewModal(true)
    }

    const closePreview = () =>{
        setOpenPreviewModal(!openPreviewModal)
    }

    
  return (
    <div className="sport-preview-container">
        <header className='prev-header'>
            <h4>Popular Sports</h4>
            <div className="sub-header">
                <p>
                    Pilih olahraga favorit Anda dan telusuri lapangan yang tersedia di area Anda. Semua fasilitas telah diverifikasi dan berstandar profesional.
                </p>
                <button>
                    View Sport <IoChevronForward/>
                </button>
            </div>
        </header>

        <div className="prev-body">
            {sportPreview.map((prev)=>(
                <main key={prev.id} className='prev-card'>
                    <section className='sport-cover'>
                        <img src={prev.img} alt={prev.name} />
                        <span>{prev.totalCourt} Courts Available</span>
                    </section>

                    <section className='sport-desc'>
                        <h4>{prev.name} <TfiLayoutLineSolid/></h4>
                        <p>{prev.desc}</p>
                    </section>

                    <section className='sport-btn'>
                        <button onClick={handleOpenPreview}>Book Now <IoChevronForward/></button>
                    </section>
                </main>
            ))}
        </div>

        {/* preview modal */}
        {openPreviewModal && (
            <PreviewModal
                isOpen={handleOpenPreview}
                onClose={closePreview}
            />
        )}

    </div>
  )
}

export default SportPreview