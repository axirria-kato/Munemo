import './App.css'

const features = [
  {
    title: 'シンプル',
    body: '必要な情報だけを、わかりやすく届けます。',
  },
  {
    title: 'モダン',
    body: 'React と Vite で、軽くて速いページを構築しています。',
  },
  {
    title: 'これから',
    body: 'コンテンツやデザインは、これから一緒に育てていけます。',
  },
]

function App() {
  return (
    <div className="page">
      <header className="nav">
        <a className="logo" href="#top">
          Munemo
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Welcome</p>
          <h1>Munemo へようこそ</h1>
          <p className="lead">
            公式ホームページです。サービスや活動の紹介を、これからここにまとめていきます。
          </p>
          <a className="button" href="#about">
            詳しく見る
          </a>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            Munemo は、これから公開していくコンテンツの拠点です。お知らせ、プロフィール、リンクなどをこのページから広げていけます。
          </p>
        </section>

        <section id="features" className="section">
          <h2>Features</h2>
          <div className="cards">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            ソースコードは GitHub で公開しています。
          </p>
          <a
            className="button secondary"
            href="https://github.com/axirria-kato/Munemo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub を見る
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Munemo</p>
      </footer>
    </div>
  )
}

export default App
