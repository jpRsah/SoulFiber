import React from 'react'
import { FaVk, FaWhatsappSquare, FaOdnoklassnikiSquare,FaInstagram} from 'react-icons/fa';

export default (props) => {
    return(
        <div className="social center" >
            <a href="https://www.ok.ru/group/54497240678520" rel="noopener noreferrer" title="Soul Fiber В Одноклассниках"  target="_blank">
                <FaOdnoklassnikiSquare size={props.size} color="#ed812b"/>
            </a>
            <a href="https://vk.com/soul_fiber_aksay" rel="noopener noreferrer" title="Soul Fiber ВКонтакте" target="_blank">
                <FaVk size={props.size} color="#45668e"/>
            </a>
            <a href="https://www.instagram.com/soul_fiber_aksay" rel="noopener noreferrer" title="Soul Fiber В "  target="_blank">
                <FaInstagram size={props.size} color="#833ab4"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=9001355311" rel="noopener noreferrer" title="Soul Fiber в ватсапп"  target="_blank">
                <FaWhatsappSquare size={props.size} color='#25d366'/>       
            </a>
        </div>
    )
}