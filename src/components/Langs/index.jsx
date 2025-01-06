import Image from "../Ui/Image.jsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";


const Langs = () => {
    let { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        langSelect(lng);
        setToggle(!toggle)
    };

    const [toggle, setToggle] = useState(false);

    const [nameLang, langSelect] = useState('EN');

    return (
        <>
            <div className={"langs"}>
                <div onClick={() => setToggle(!toggle)} className={[toggle ? 'langs__current is-active' : ' langs__current']}>


                    <Image url={`icons/${nameLang.toLocaleUpperCase()}.svg`} alt="arrow"/>

                    <div className="langs__text for-devices">
                        {nameLang.toLocaleUpperCase()}

                        <Image url={`images/arrow-down.svg`} alt="arrow"/>
                    </div>
                </div>

                {toggle && (
                    <div className={"langs__sub"} >
                        <div  className="langs__sub-item" onClick={() => changeLanguage('fr')}>
                            <Image url="icons/EN.svg" alt="arrow"/>
                        </div>
                        <div className="langs__sub-item" onClick={() => changeLanguage('en')}>
                            <Image url="icons/EN.svg" alt="arrow"/>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
};

export default Langs;
