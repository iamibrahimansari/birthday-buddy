import './style.css';
const Footer = ({text, onClick}) =>{
    return <button type='button' onClick={onClick}>{text}</button>;
}

export default Footer;