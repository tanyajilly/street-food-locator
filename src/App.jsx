import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Header />
            <div className="container max-w-screen-lg p-4">
                <h2 className="text-lg text-center mb-6">
                    Find your favorite taste on the streets of San Francisco
                </h2>
                <Main />
            </div>
        </>
    );
}

export default App;
