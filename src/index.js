import ReactDOM from 'react-dom';
import Navbar from "./navbar";
import Story from "./story";
import Post from "./post"
import Sugestao from "./sugestao"

const dadosStory = [
    { imagemStory: "assets/img/9gag.svg", nome: '9gag' },
    { imagemStory: "assets/img/meowed.svg", nome: 'meowed' },
    { imagemStory: "assets/img/barked.svg", nome: 'barked' },
    { imagemStory: "assets/img/nathanwpylestrangeplanet.svg", nome: 'nathanwpylestrangeplanet' },
    { imagemStory: "assets/img/wawawicomics.svg", nome: 'respondeai' },
    { imagemStory: "assets/img/filomoderna.svg", nome: 'filomoderna' },
    { imagemStory: "assets/img/memeriagourmet.svg", nome: 'memeriagourmet' },
];

const dadosPost = [
    { imagemStoryPost: "assets/img/9gag.svg", nomePost: '9gag', imagemPost: "assets/img/gato-telefone.svg", imagemCurtida: "assets/img/respondeai.svg", informacaoCurtida: { nome: 'resposndeai', texto: 'outras 101.523 pessoas' } },

    { imagemStoryPost: "assets/img/barked.svg", nomePost: 'barked', imagemPost: "assets/img/dog.svg", imagemCurtida: "assets/img/adorable_animals.svg", informacaoCurtida: { nome: 'adorable_animals', texto: 'outras 99.159 pessoas' } },

    { imagemStoryPost: "assets/img/foto1.png", nomePost: 'mat-crg', imagemPost: "assets/img/post1-img.jpg", imagemCurtida: "assets/img/foto5.png", informacaoCurtida: { nome: 'resposndeai', texto: 'outras 101.523 pessoas' } },

    { imagemStoryPost: "assets/img/foto2.png", nomePost: 'betinha', imagemPost: "assets/img/post3-img.jpg", imagemCurtida: "assets/img/foto4.png", informacaoCurtida: { nome: 'resposndeai', texto: 'outras 101.523 pessoas' } },

    { imagemStoryPost: "assets/img/foto3.png", nomePost: 'glei33', imagemPost: "assets/img/post2-img.jpg", imagemCurtida: "assets/img/foto2.png", informacaoCurtida: { nome: 'resposndeai', texto: 'outras 101.523 pessoas' } },

    { imagemStoryPost: "assets/img/foto4.png", nomePost: 'glei', imagemPost: "assets/img/post4-img.jpg", imagemCurtida: "assets/img/foto1.png", informacaoCurtida: { nome: 'resposndeai', texto: 'outras 101.523 pessoas' } },
];

const dadosSugestoes = [
    {imagemSugestao: "assets/img/bad.vibes.memes.svg", nomeSugestao:'bad.vibes.memes'},
    {imagemSugestao: "assets/img/razoesparaacreditar.svg", nomeSugestao: 'razoesparaacreditar'},
    {imagemSugestao:"assets/img/adorable_animals.svg" , nomeSugestao: 'adorable_animals'},
    {imagemSugestao: "assets/img/smallcutecats.svg", nomeSugestao: 'smallcutecats'},


]

function App() {
    return (
        <div>
            <Navbar />

            <div class="corpo">
                <div class="esquerda">
                    <div class="stories">
                        {dadosStory.map(dadoStory => <Story imagemStory={dadoStory.imagemStory} nome={dadoStory.nome} />)}

                        <div class="setinha">
                            <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>
                    </div>

                    <div class="posts">
                        {dadosPost.map(dadoPost =>
                            <Post imagemStoryPost={dadoPost.imagemStoryPost} nomePost={dadoPost.nomePost} imagemPost={dadoPost.imagemPost} imagemCurtida={dadoPost.imagemCurtida} informacaoCurtidaNome={dadoPost.informacaoCurtida.nome} informacaoCurtidaTexto={dadoPost.informacaoCurtida.texto} />
                        )}
                    </div>
                </div>

                <div class="sidebar">
                    <div class="usuario">
                        <img src="assets/img/catanacomics.svg" />
                        <div class="texto">
                            <strong>catanacomics</strong>
                            Catana
                        </div>
                    </div>

                    <div class="sugestoes">
                        <div class="titulo">
                            Sugestões para você
                            <div>Ver tudo</div>
                        </div>
                    {dadosSugestoes.map( dadoSugestoes => <Sugestao imagemSugestao = {dadoSugestoes.imagemSugestao} nomeSugestao = {dadoSugestoes.nomeSugestao} />)}
                    </div>

                    <div class="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </div>

                    <div class="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>

            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    );
}


ReactDOM.render(<App />, document.querySelector(".root"));
