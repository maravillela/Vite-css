export default function Cards (props) {

    return (
        <article className="viteCard">
               {props.emoji}
            <p>{props.title}</p>
            <p>{props.text}</p>
    </article>
    );
}