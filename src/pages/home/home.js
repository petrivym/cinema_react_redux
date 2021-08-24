import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import MoviesList from "../../components/moviesList/moviesList";

export default function Home() {
    return (
        <>
            <Header/>
            <MoviesList/>
            <MoviesList/>

            <Footer/>
        </>
    );
}
