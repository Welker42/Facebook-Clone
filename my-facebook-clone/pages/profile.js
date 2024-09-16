// pages/profile.js

import styles from '../styles/Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.profileContainer}>
            <header className={styles.profileHeader}>
                <div className={styles.coverPhoto}>
                    {/* Foto de capa */}
                </div>
                <div className={styles.profileInfo}>
                    <div className={styles.profilePicture}>
                        {/* Foto do perfil */}
                    </div>
                    <div className={styles.profileDetails}>
                        <h1>Nome do Usuário</h1>
                        <p>Descrição ou Bio do Usuário</p>
                    </div>
                </div>
            </header>
            <nav className={styles.profileNav}>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Amigos</a></li>
                    <li><a href="#">Fotos</a></li>
                    <li><a href="#">Publicações</a></li>
                </ul>
            </nav>
            <main className={styles.profileContent}>
                <section className={styles.posts}>
                    <article className={styles.post}>
                        <h2>Postagem Título</h2>
                        <p>Conteúdo da postagem...</p>
                    </article>
                    {/* Mais postagens */}
                </section>
            </main>
        </div>
    );
};

export default Profile;
