export default function sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagemSugestao} />
                <div class="texto">
                    <div class="nome">{props.nomeSugestao}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}