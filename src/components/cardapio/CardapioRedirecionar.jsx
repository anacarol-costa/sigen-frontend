
export default function CardapioRedirecionar() {

    const redirecionarCardapio = () => {
        window.location.href = 'https://www.canva.com/design/DAFB0pCeswY/KMst5L1QfRh2OqxYoZXQsw/view?website#2:bolos-especiais-kg-r-115-00'
    }
    return (
        document.addEventListener('click', redirecionarCardapio)
    );
}