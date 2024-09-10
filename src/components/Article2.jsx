
import article2Img from "../Assets/blog-image-2.jpg";

function Article2() {
    return (
        <article>
            <time datetime="11-12-2020">11/12/20</time>
            <h2>Vintage in Vogue</h2>
            <img src={article2Img} alt="" />
            <p>
                <b class="letter">S</b>elfies Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </article>
    );
}

export default Article2;