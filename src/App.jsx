import { useState } from 'react'
import './App.css'

const reasons = [
  {
    art: '/images/flow-speak.png',
    step: '話す',
    title: '話すだけで記録が整う',
    body: '音声入力するだけで、要約・タグ付け・構造化まで自動で完了します。',
  },
  {
    art: '/images/flow-understand.png?v=2',
    step: '理解する',
    title: '辞書学習で高精度に理解',
    body: '業界辞書・企業辞書・個人辞書を参照し、専門用語や固有名詞も正確に認識します。',
    labels: ['専門用語', '企業名', '人物'],
  },
  {
    art: '/images/flow-store.png?v=3',
    step: '蓄積する',
    title: 'タグでナレッジ化',
    body: '業務タグ・顧客タグ・行動タグ・リスクタグを自動分類し、検索できるナレッジに変換します。',
    labels: ['顧客', '業務', '行動', 'リスク'],
    labelStyle: 'hash',
  },
  {
    art: '/images/flow-act.png',
    step: '行動する',
    title: '次の行動を提案',
    body: '過去の記録や顧客情報、業務ルールを参照し、「次に何をすべきか」を提示します。',
  },
  {
    art: '/images/flow-evolve.png',
    step: '進化する',
    title: 'AIが人に合わせて進化する',
    body: '訂正学習・個人辞書・組織辞書により、使うほどに精度が向上し、自分の業務スタイルに最適化します。',
  },
]

const features = [
  {
    icon: 'doc',
    title: '要約',
    en: 'Summarization',
    body: '音声・テキストを文脈に沿って要約し、必要な情報だけを抽出。',
  },
  {
    icon: 'tag',
    title: 'タグ生成',
    en: 'Tagging',
    body: '分類モデルが最適なタグを自動選択。企業ごとにタグ体系を定義可能。',
  },
  {
    icon: 'book',
    title: '辞書体系',
    en: 'Dictionary System',
    body: 'AIが自動更新し、人が訂正可能。',
  },
  {
    icon: 'share',
    title: '行動提案',
    en: 'Action Suggestion',
    body: '過去データ・辞書・タグ・顧客情報を統合し、次の行動と注意点を提示。',
  },
  {
    icon: 'link',
    title: 'データ連携',
    en: 'Integration',
    body: 'CRM / SFA / EHR / 介護記録 / 販売管理 / 各種マスタと連携。',
  },
  {
    icon: 'stack',
    title: 'ナレッジ蓄積',
    en: 'Knowledge Base',
    body: '構造化された記録が蓄積され、検索・分析・改善に活用可能。',
  },
]

const values = [
  {
    title: '行動の質が均一化する',
    body: '個人差・スキル差・記録のばらつきを吸収し、組織全体の行動の質が揃う。',
  },
  {
    title: '顧客対応の質が向上する',
    body: '行動提案により、誰でも一定以上の対応ができる状態へ。',
  },
  {
    title: '記録がナレッジに変わる',
    body: 'タグと辞書により、記録が「使える情報」に変わる。',
  },
  {
    title: '改善が循環する組織になる',
    body: 'ナレッジ → 行動 → 改善 → 再蓄積。この循環が自動で回り続ける。',
  },
]

const befores = [
  {
    title: '記録がバラバラ',
    body: '人によって書き方が異なり、必要な情報が残らない。',
  },
  {
    title: '対応の質に個人差',
    body: '経験やスキルによって、顧客対応の質が不均一。',
  },
  {
    title: '情報が散在',
    body: '記録が各所に散らばり、ナレッジとして活用できない。',
  },
  {
    title: 'スキルの属人化',
    body: 'ベテランに依存し、ノウハウが継承されない。',
  },
]

const afters = [
  {
    title: '行動が標準化された組織',
    body: '誰が対応しても、一定の品質で業務が進む。',
  },
  {
    title: '顧客に選ばれる対応品質',
    body: '最適な提案で、顧客満足度が向上する。',
  },
  {
    title: '検索できるナレッジ',
    body: '必要な情報がすぐに見つかり、現場で活用できる。',
  },
  {
    title: '進化し続ける組織',
    body: 'データをもとに改善が続き、継続的に成長する。',
  },
]

function Logo() {
  return (
    <a className="logo" href="#top">
      Munemo Assistant
    </a>
  )
}

const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [showErrors, setShowErrors] = useState(false)

  function validate(next = values) {
    const nextErrors = {}

    if (!next.name.trim()) {
      nextErrors.name = '必須入力です'
    }

    if (!next.email.trim()) {
      nextErrors.email = '必須入力です'
    } else if (!EMAIL_PATTERN.test(next.email.trim())) {
      nextErrors.email = '@を含む正しいメールアドレスを入力してください。'
    }

    if (!next.message.trim()) {
      nextErrors.message = '必須入力です'
    }

    return nextErrors
  }

  function handleChange(event) {
    const { name, value } = event.target
    const next = { ...values, [name]: value }
    setValues(next)
    if (showErrors) {
      setErrors(validate(next))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    setShowErrors(true)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSent(true)
    }
  }

  if (sent) {
    return <p className="contact-thanks">お問い合わせを受け付けました。ありがとうございます。</p>
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        お名前
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={errors.name ? 'invalid' : undefined}
        />
        {errors.name ? (
          <span className="field-error" id="name-error">
            {errors.name}
          </span>
        ) : null}
      </label>
      <label>
        メールアドレス
        <input
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={errors.email ? 'invalid' : undefined}
        />
        {errors.email ? (
          <span className="field-error" id="email-error">
            {errors.email}
          </span>
        ) : null}
      </label>
      <label>
        お問い合わせ内容
        <textarea
          name="message"
          rows="6"
          value={values.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={errors.message ? 'invalid' : undefined}
        />
        {errors.message ? (
          <span className="field-error" id="message-error">
            {errors.message}
          </span>
        ) : null}
      </label>
      <button className="button" type="submit">
        送信
      </button>
    </form>
  )
}

function App() {
  return (
    <div className="page">
      <header className="nav">
        <Logo />
        <nav>
          <a href="#why">特徴</a>
          <a href="#features">機能</a>
          <a href="#value">価値</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <h1>
              話すだけで記録を整理するAI
              <br />
              <span className="hero-title-line">行動の質を均一化する新しい業務基盤</span>
            </h1>
            <p className="hero-lead">
              記録のばらつき、行動の抜け漏れ、顧客対応の不均一。
              <br />
              AIが進化しても現場に残り続ける課題をMunemo Assistant は根本から解決します。
            </p>
            <div className="hero-quote">
              <p>AIが人に合わせる。</p>
              <p>組織の行動が整う。</p>
              <p>誰もが本来の仕事に集中できる未来へ。</p>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/images/hero.png" alt="" />
          </div>
        </section>

        <section className="band" id="about">
          <div className="wrap about">
            <p className="kicker">Munemoとは？</p>
            <h2>Munemo Assistant は「行動の質を均一化するAI」です。</h2>
            <div className="about-copy">
              <p>
                現場では、記録の書き方・行動の仕方・顧客対応の質が人によって大きく異なります。
                <br />
                その結果、組織のナレッジは活用されず、改善が進まないまま属人的な業務が続きます。
              </p>
              <p>話すだけで記録を整理し、タグ付けし、ナレッジ化し、次の行動まで提案するAI。</p>
              <p>
                汎用AIとは違い、AIが人に合わせて進化する構造を持ち、個人差・記録のばらつき・行動の抜け漏れを吸収します。
              </p>
            </div>
          </div>
        </section>

        <section className="features-showcase" id="why">
          <div className="wrap">
            <p className="kicker">Features</p>
            <h2>Munemo の特徴</h2>
            <p className="features-lead">話すだけで、記録・整理・提案・進化まで。現場の行動を支える5つの力。</p>
            <ol className="flow-steps">
              {reasons.map((reason, index) => (
                <li key={reason.step}>
                  <span>{index + 1}</span>
                  {reason.step}
                </li>
              ))}
            </ol>
            <div className="flow-cards">
              {reasons.map((reason) => (
                <article key={reason.step}>
                  <div className={reason.labels ? 'flow-art has-labels' : 'flow-art'}>
                    <img src={reason.art} alt="" />
                    {reason.labels ? (
                      <ul className={reason.labelStyle === 'hash' ? 'flow-labels hash' : 'flow-labels'}>
                        {reason.labels.map((label) => (
                          <li key={label}>{label}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="features">
          <div className="wrap">
            <p className="kicker">Functions</p>
            <h2>Munemo の機能</h2>
            <ol className="function-list">
              {features.map((feature) => (
                <li key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="appeal" id="value">
          <div className="wrap">
            <p className="kicker">Benefits</p>
            <h2>Munemo の価値</h2>
            <p className="appeal-lead">現場のバラバラな情報を、組織の力に変える。</p>

            <div className="ba">
              <div className="ba-col before">
                <p className="ba-kicker">Before</p>
                <h3>こんな課題はありませんか？</h3>
                <ul>
                  {befores.map((item) => (
                    <li key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ba-arrow" aria-hidden="true">
                <span>Munemo</span>
              </div>

              <div className="ba-col after">
                <p className="ba-kicker">After</p>
                <h3>こんな未来を実現します</h3>
                <ul>
                  {afters.map((item) => (
                    <li key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="appeal-bridge">
              <p className="ba-kicker">Munemo</p>
              <p className="ba-mid-copy">話すだけで、現場の情報を組織のナレッジに。</p>
              <div className="appeal-values">
                {values.map((value) => (
                  <article key={value.title}>
                    <h3>{value.title}</h3>
                    <p>{value.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <p className="ba-foot">現場の経験を、組織の未来へ。</p>
          </div>
        </section>

        <section className="vision" id="vision">
          <img src="/images/city.png" alt="" />
          <div className="wrap vision-copy">
            <p className="kicker light">07 Munemo Assistant のビジョン</p>
            <h2>Vision</h2>
            <p className="vision-lead">
              Munemo Assistant は、AIを使いこなせる世界をつくるためのサービスです。
            </p>
            <p>
              AIと人の間に正しい橋を架け、行動の質を均一化し、誰もが本来の仕事に集中できる未来を実現します。
            </p>
            <p className="vision-emphasis">
              Munemo Assistant は、AIが進化するほど価値が上がるAIです。
            </p>
          </div>
        </section>

        <section className="band alt" id="contact">
          <div className="wrap contact">
            <h2 className="kicker">お問い合わせ</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Munemo</p>
      </footer>
    </div>
  )
}

export default App
