import {FooterWrapper} from "@/components/Footer/styles";

export default function Footer() {
    return(
        <FooterWrapper className={'container'}>
            <div>
                <div>
                    <ul>
                        <h1><a href="">Каталог</a></h1>
                        <li><a href="">Цветы</a></li>
                        <li><a href="">Свечи</a></li>
                        <li><a href="">Мебель</a></li>
                        <li><a href="">Украшения</a></li>
                    </ul>
                    <ul>
                        <h1><a href="">Бренд</a></h1>
                        <li><a href="">История</a></li>
                        <li><a href="">Связаться с нами</a></li>
                        <li><a href="">Часто задаваемые вопросы</a></li>
                    </ul>
                    <div>
                        <p>Остались вопросы?</p>
                        <p>Оставьте свою номер телефона и мы перезвоним вам!</p>
                        <input placeholder={'Номер телефона'} type="number"/>
                        <button>Отправить</button>
                    </div>
                </div>
                <hr/>
                <p>© 2023 MS Design. Все права защищены</p>
            </div>
        </FooterWrapper>
    )
}