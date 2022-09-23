import { Post } from './Post';
import './global.css';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Jr.Soares"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione repudiandae omnis consequatur ipsa dolorum consectetur odio similique quia illo doloremque distinctio, delectus aperiam veniam unde voluptas? Ab, perferendis facere?"
      />
    </div>
  );
}
export default App;
