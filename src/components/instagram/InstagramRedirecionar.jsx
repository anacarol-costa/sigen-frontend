
export default function InstagramRedirecionar() {

    const redirecionarInstagram = () => {
        window.location.href = 'https://www.instagram.com/gi.quitutes/';
    }
    return (
        document.addEventListener('click', redirecionarInstagram)
    );
}

