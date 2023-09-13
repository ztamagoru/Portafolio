/*
    import { DotPulse } from '@uiball/loaders'

<DotPulse
    size={40}
    speed={1.3}
    color="black"
/>

export default function PageSection({ isLoading }) {
    return (
        <div aria-live="polite" aria-busy={isLoading}>
            {isLoading && <Waveform />}
        </div>
    )
}
*/

let game = [
    {
        widget: "https://itch.io/embed/2216972?bg_color=ffffff&amp;fg_color=7a449e&amp;link_color=c028cf&amp;border_color=846b99",
        link: "https://magentawitch.itch.io/whispers-of-the-heart",
        name: "Whispers of the Heart by magentawitch, AnnCinn, xragdollqueen, tamagoru"
    },
    {
        widget: "https://itch.io/embed/2246712?bg_color=8fbf9b&amp;fg_color=222222&amp;link_color=ffffff&amp;border_color=6c9c78",
        link: "https://elithne.itch.io/ecos",
        name: "Ecos by Elithne, tamagoru, Ana Devar, NekoPipita, Paz Rozen, Zejbo32, Cecilia Verino"
    },
    {
        widget: "https://itch.io/embed/2256688?bg_color=1d1414&amp;fg_color=ffffff&amp;link_color=ed0000&amp;border_color=6f4141",
        link: "https://nicolas-fernandez.itch.io/sleeping-nightmare",
        name: "Sleeping Nightmares by Nicolas Fernandez, tamagoru, Less.lie"
    }
]

function viewItchio(game) {
    return document
        .getElementById("game-template")
        .innerHTML
        .replace("{{WIDGET_LINK}}", game.widget)
        .replace("{{GAME_LINK}}", game.link)
        .replace("{{GAME_NAME}}", game.name)
}

document.addEventListener('DOMContentLoaded', loadPage)

function loadPage() {
    let htmlGames = game.map(viewItchio).join('');

    document.getElementById("itchio-games").innerHTML = htmlGames;
}