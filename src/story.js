export default function story(props){
    return(
      <div class="story">
        <div class="imagem">
          <img src= {props.imagemStory} />
        </div>
        <div class="usuario">
          {props.nome}
        </div>
      </div>
    )
}