import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jr.Soares"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione repudiandae omnis consequatur ipsa dolorum consectetur odio similique quia illo doloremque distinctio, delectus aperiam veniam unde voluptas? Ab, perferendis facere?"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
