import Image from "../Ui/Image.jsx";


const Socials = ({color}) => {
    return (
        <>
            <div className={`socials ${color ? 'socials--color' : ''}`}>
                <a href="#" className="socials__item">
                    <Image url="icons/tg.svg" />
                </a>

                <a href="#" className="socials__item">
                    <Image url="icons/x.svg" />
                </a>
                <a href="#" className="socials__item">
                    <Image url="icons/instagram.svg" />
                </a>
                <a href="#" className="socials__item">
                    <Image url="icons/link.svg" />
                </a>
            </div>
        </>
    )
};

export default Socials;
