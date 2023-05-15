import { useState } from "react"
import './Curiosidades.css'
import pokeScary from "./pokeEspanto.jpg"


const Curiosidades = () => {

    const [index, setIndex] = useState()
    const [startCuriosity, setStartstartCuriosity] = useState(false)
    const [hide, setHide] = useState(false)

    const quotes = [
        {
            quote:
                "Arceus é considerado o deus dos pokemons.",
        },
        {
            quote:
                "Rhydon foi o primeiro Pokémon criado.",
        },
        {
            quote: "Pokémon Yellow surgiu da fama do anime. Após o desenho fazer sucesso no mundo todo, Pokémon Yellow foi produzido, alterando os spirtes e o plot da história para lembrar os monstrinhos como representados na tv.",
        },
        {
            quote: "Alguns erros de programação tornavam ataques inviáveis de serem usados. Era o caso de Focus Energy que, ao contrário do que deveria fazer, diminuía as chances do Pokémon acertar um ataque crítico",
        },
        {
            quote:
                "Sableye foi um pokemon inspirado em um caso de ataques alienigenas na cidade de Hopkinsville nos Estados Unidos.",
        },
        {
            quote:
                "O pokemon altaria lembra um personagem chamado Banana Bird Queen do jogo Donkey Kong 3.",
        },
        {
            quote:
                "Até o momento não existe nenhum pokemon com a combinação Dragão-Inseto, contudo o pokemon Flygon é uma execelente promessa de termos esse tipo com sua mega evolução.",
        },
        {
            quote:
                "Poderíamos ter tido um skate além da bicicleta. Em dados de Pokémon Gold & Silver foi constatado que estavam nos planos dos desenvolvedores incluir um skate como modo de transporte, mas por razões ainda não descobertas ele foi cortado.",
        },
        {
            quote:
                "Snorlax e Sudowoodo foram criados especificamente para bloquear caminhos.",
        },
        {
            quote:
                "Dodrio apesar de ter sido inspirado em um avestruz e não ter asas possui o tipo Voador.",
        },
        {
            quote:
                "Em Pokemon Stadium, Snorlax abre seus olhos quando usa o golpe faint.",

        },
        {
            quote:
                "Giratina o pokemon Dragão Fantasma possui duas formas fisicas, uma mais fantasmagorica que ele assume no Mundo Distorcido, e uma mais monstruosa que ele assume quando está no mundo dos humanos.",
        },
        {
            quote:
                "O pokemon Ho-Oh foi um misterio durante o inicio da saga pokemon, embora ele chegue a aparecer no primeiro episodio do anime sua verdadeira identidade só seria revelada na segunda temporada da franquia.",
        },
        {
            quote:
                "O pokemon Grimmsnarl e suas pre-evoluções foram baseadas em antigas lendas de diabinhos, goblins e outros duendes do folclore europeu.",
        },
        {
            quote:
                "A Game Freak tinha cerca de 10 empregados na época dos primeiros jogos – Todos ajudaram a bolar ideias e designs para os 151 monstrinhos de Pokémon Red & Green e hoje a empresa tem quase 150 funcionários.",
        },
        {
            quote:
                "Quando o desenvolvimento dos jogos foi finalizado, o programador Shigeki Morimoto viu que havia certo espaço disponível no cartucho então ele secretamente incluiu o Pokémon Mew, sua criação, no jogo. A princípio, ele pensou: ‘Se ninguém encontrar, o Mew será apenas para nós, desenvolvedores, desfrutarmos’. Mas o secreto Mew acabou chamando muita atenção como o 151º Pokémon, para grande surpresa do programador e de todo o time.",
        },
        {
            quote:
                "Clefairy é um dos monstrinhos mais conhecidos da franquia e um dos primeiros a ser desenvolvido para os games. Por conta disso, inicialmente, os animadores consideraram escolher ele ao invés de pikachu para ser companheiro de Ash.",
        },
        {
            quote:
                "Porygon nunca mais apareceu no anime por conta de seu episódio banido.",
        },
        {
            quote:
                "Detetive Pikachu 2 seria uma parodia do filme de Lady Gaga, 'Nasce uma Estrela', e um dos personagens principais seria o pokemon Jigglypuff."
        },
        {
            quote:
                "Nos primeiros rascunhos durante a produção de Red e Green, Brock não era o primeiro líder de ginásio, e sim um menino genérico, que terminou sendo cortado da versão final.",
        },
        {
            quote:
                "No primeiros rascunhos do sistema de jogo, Pokémon teria um sistema de carisma que influenciaria na captura, trocado por enfraquecer o Pokémon selvagem através de batalhas.",
        },
        {
            quote:
                "Recentemente, hackers descobriram que o código de programação previa uma batalha final contra o professor Carvalho. O time do professor é composto por: Tauros, Exeggutor, Arcanine, Gyarados e a evolução final do Pokémon inicial que sobrou após o jogador e seu rival terem escolhido suas respectivas criaturas.",
        },
        {
            quote:
                "O nome original de Pokémon era 'Capsule Monsters', baseado nos monstros encapsulados de Ultraseven. Mas na época o nome já estava registrado, então surgiu o nome Pokémon, abreviação de Pocket Monsters.",
        },
        {
            quote:
                "Os pokemons do tipo Psiquico tem suas fraquezas baseadas nos medos mais comuns das pessoas que são Inseto, Fantasma, Escuridão."
        }

    ];

    const generateCuriosity = () => {
        const generator = Math.floor(Math.random() * quotes.length)
        setIndex(generator)
        setStartstartCuriosity(true)
        setHide(true)
    }

    return (
        <div style={{
            backgroundImage: `url(${pokeScary})`,
            backgroundPosition: "center",
            backgroundSize: 'contain',
            backgroundSize: '100% 100%',
            height: '100vh',
            backgroundRepeat: 'no-repeat'
        }}>

            <div className="above">
                <div className="pokeBox">
                    <button

                        onClick={generateCuriosity}>Curiosidade</button>
                </div>
            </div>

            {hide && <div className="forCuriosity">
                {quotes.map((quote, i) => (
                    <p
                        style={{ textAlign: 'center' }}
                        key={i}
                        className={`curiosidades-quote ${startCuriosity ? "fade-in" : ""}`}
                        onAnimationEnd={() => setStartstartCuriosity(false)
                        }
                    >
                        {index !== undefined && index === i ? quote.quote : ""}
                    </p>
                ))}
            </div>}

        </div>
    )
}

export default Curiosidades