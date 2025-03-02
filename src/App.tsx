import WordCounter from "./components/WordCounter";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-10">
      <Header />
      <WordCounter />
    </div>
  );
};

export default App;
