import React, { useEffect } from 'react'
import '../../styles/Landing/Highlights.css'
import { GoVerified } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import { GiTrophy } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

const highlightContent = [
    {
        id:1,
        title:'Verified Centers',
        desc:'Setiap fasilitas diperiksa secara manual untuk memastikan keamanan dan kualitasnya.',
        icons: <GoVerified/>
    },
    {
        id:2,
        title:'Instant Booking',
        desc:'Pembaruan ketersediaan secara real-time. Tidak perlu lagi menelepon.',
        icons: <FiClock/>
    },
    {
        id:3,
        title:'Pro Amenities',
        desc:'Akses ke loker, kamar mandi, dan penyewaan peralatan premium.',
        icons: <GiTrophy/>
    },
    {
        id:4,
        title:'Community',
        desc:'Bergabunglah dalam pertandingan dan temukan pemain dengan tingkat keahlian yang sama dengan Anda dengan mudah..',
        icons: <FaUsers/>
    }
]

const HighlightsSection =()=> {

    useEffect(() => {
    const cards = document.querySelectorAll(".highlight-box");

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
    
  return (
    <div className='highlight-container'>
        {highlightContent.map((item)=>(
            <div className="highlight-box" key={item.id}>
                <button>{item.icons}</button>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
            </div>
        ))}
    </div>
  )
}

export default HighlightsSection