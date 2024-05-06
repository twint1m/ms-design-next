import Image from "next/image";
import crossIcon from "@/assets/icons/cross.svg";
import logo from "@/assets/logo.png";
import cartIcon from "@/assets/icons/cart.svg";
import favouritesIcon from "@/assets/icons/favourites.svg";
import {HeaderWrapper} from "@/components/Header/styles";



export default function Header() {
    return (
        <HeaderWrapper>
        <div>
            <div className={'container'}>
                <p>Получите скидку 15% по промокоду <u>MSDESIGN</u></p>
                <button><Image src={crossIcon} alt={'cross icon'} width={10} height={10}/></button>
            </div>
        </div>
        <nav>
            <div className="container">
                <button><Image src={logo} alt={'MS Design logo'}/></button>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <button><Image src={cartIcon} alt={'cart'}></Image></button>
                <button><Image src={favouritesIcon} alt={'favourites'}></Image></button>
            </div>
        </nav>
    </HeaderWrapper>)
}