const buttonGerador = document.querySelector("#buttonGerador")
const mensagemTexto = document.querySelector("#mensagemTexto")

const arrayTexto =['"Santifica-os na verdade; a tua palavra é a verdade." "Se você confessar com a sua boca que Jesus é Senhor e crer em seu coração que Deus o ressuscitou dentre os mortos, será salvo." "Finalmente, fortaleçam-se no Senhor e no seu forte poder." "Ensinando-os a obedecer a tudo o que eu ordenei a vocês.','"O casamento deve ser honrado por todos; o leito conjugal, conservado puro; pois Deus julgará os imorais e os adúlteros." "Hebreus 13:4"',
'“Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.” Jeremias 29:11',

'Santifica-os na verdade; a tua palavra é a verdade.João 17:17','"Se, porém, não agrada a vocês servir ao Senhor, esco­lham hoje a quem irão servir, se aos deuses que os seus antepassados serviram além do Eufrates, ou aos deuses dos amorreus, em cuja terra vocês estão vivendo. Mas eu e a minha família servi­remos ao Senhor. Josué 24:15"','"Ora, as obras da carne são manifestas: imoralidade sexual, impureza e libertinagem; Gálatas 5:19"','"Vocês, porém, são geração eleita, sacerdócio real, nação santa, povo exclusivo de Deus, para anunciar as grandezas daquele que os chamou das trevas para a sua maravilhosa luz. 1 Pedro 2:9"','Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus. Romanos 12:2','"Ele enxugará dos seus olhos toda lágrima. Não haverá mais morte, nem tristeza, nem choro, nem dor, pois a antiga ordem já passou".Apocalipse 21:4','O justo pensa bem antes de responder mas a boca dos ímpios jorra o mal.Provérbios 12:2',
'“Cheguemos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia e achar graça, a fim de sermos ajudados em tempo oportuno. Hebreus 4:16”',
'“Então dali buscarás ao Senhor teu Deus, e o acharás, quando o buscares de todo o teu coração e de toda a tua alma. Deuteronômio 4:29”']



buttonGerador.addEventListener("click",()=>{
    const totalRespostas = arrayTexto.length
    const fraseAleatoria = Math.floor(Math.random()*totalRespostas)
    mensagemTexto.innerHTML = arrayTexto[fraseAleatoria]; 
})