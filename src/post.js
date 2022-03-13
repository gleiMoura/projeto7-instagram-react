export default function post(props){
    return (
                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src= {props.imagemStoryPost} />
                                {props.nomePost}
                                </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img src={props.imagemPost} />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src={props.imagemCurtida} />
                                <div class="texto">
                                    Curtido por <strong>{props.informacaoCurtidaNome}</strong> e <strong>{props.informacaoCurtidaTexto}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}