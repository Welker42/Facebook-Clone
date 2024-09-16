// pages/index.js

import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>MyFacebook</div>
                <nav className={styles.nav}>
                    <input type="text" placeholder="Pesquisar..." className={styles.searchInput} />
                    <ul className={styles.navLinks}>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Amigos</a></li>
                        <li><a href="#">Notícias</a></li>
                        <li><a href="#">Mensagens</a></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.mainContent}>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarItem}>Amigos</div>
                    <div className={styles.sidebarItem}>Grupos</div>
                    <div className={styles.sidebarItem}>Eventos</div>
                </aside>
                <section className={styles.feed}>
                    <div className={styles.post}>
                        <h2>Nome do Usuário</h2>
                        <p>Este é um post de exemplo. Aqui você pode colocar o conteúdo da postagem.</p>
                    </div>
                    <div className={styles.post}>
                        <h2>Nome do Usuário</h2>
                        <p>Outro exemplo de postagem com conteúdo diferente.</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
