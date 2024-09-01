import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {

    return (
        <footer>
            <div className="divFooter">
                <h3>Contacto</h3>
                <ol>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Whatsapp</li>
                </ol>
            </div>
            <div className="divFooter">
                <h3>Quienes somos</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, esse? Laudantium officia voluptas fugiat error, praesentium cumque quod possimus est quis optio! Nostrum accusantium in numquam voluptatem, enim consectetur iusto facilis unde veniam reprehenderit rep.</p>
            </div>
        </footer>
    )
}

export default Footer;