import { useState } from 'react'
import './App.css'

const reasons = [
  {
    icon: 'mic',
    title: '話すだけで記録が整う',
    body: '音声入力するだけで、要約・タグ付け・構造化まで自動で完了。',
  },
  {
    icon: 'book',
    title: '辞書体系で認識精度が向上',
    body: '業界辞書・企業辞書・個人辞書を参照し、専門用語や固有名詞も正確に理解。',
  },
  {
    icon: 'tag',
    title: 'タグ体系でナレッジ化',
    body: '業務タグ・顧客タグ・行動タグ・リスクタグを自動選択。記録が「検索できるナレッジ」に変わる。',
  },
  {
    icon: 'bulb',
    title: '行動提案エンジンで次の行動が明確に',
    body: '過去記録・顧客情報・業務ルールを参照し、「次に何をすべきか」を提示。',
  },
  {
    icon: 'chart',
    title: 'AIが人に合わせて進化する',
    body: '訂正学習・個人辞書・組織辞書により、使えば使うほど精度が上がる。',
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
    chips: ['業務', '顧客', '行動', 'リスク'],
  },
  {
    icon: 'book',
    title: '辞書体系',
    en: 'Dictionary System',
    body: 'AIが自動更新し、人が訂正可能。',
    list: ['業界辞書', '企業辞書', '個人辞書'],
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
    chips: ['CRM', 'SFA', 'EHR'],
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
    icon: 'people',
    title: '行動の質が均一化する',
    body: '個人差・スキル差・記録のばらつきを吸収し、組織全体の行動の質が揃う。',
  },
  {
    icon: 'star',
    title: '顧客対応の質が向上する',
    body: '行動提案により、誰でも一定以上の対応ができる状態へ。',
  },
  {
    icon: 'stack',
    title: '記録がナレッジに変わる',
    body: 'タグと辞書により、記録が「使える情報」に変わる。',
  },
  {
    icon: 'cycle',
    title: '改善が循環する組織になる',
    body: 'ナレッジ → 行動 → 改善 → 再蓄積。この循環が自動で回り続ける。',
  },
]

const benefits = [
  '記録時間の大幅短縮',
  '行動の質が均一化',
  '記録漏れ（放棄）の解消',
  '顧客対応の質が向上',
  '記録がナレッジとして活用可能に',
  '新人・外国人・ADHDなどの個人差を吸収',
  '行動提案による業務効率化',
  '組織全体のサービス品質が向上',
]

function Icon({ name }) {
  const common = {
    className: 'icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true,
  }

  if (name === 'mic') {
    return (
      <svg {...common}>
        <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 11a6 6 0 0 0 12 0M12 17v4M8 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'book') {
    return (
      <svg {...common}>
        <path d="M5 5h10a3 3 0 0 1 3 3v12H8a3 3 0 0 0-3 3V5z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'tag') {
    return (
      <svg {...common}>
        <path d="M4 10V5h5l9 9-5 5-9-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      </svg>
    )
  }
  if (name === 'bulb') {
    return (
      <svg {...common}>
        <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 14c-1.7-1.3-3-3.2-3-5.5A7 7 0 0 1 19 8.5c0 2.3-1.3 4.2-3 5.5l-.5 1.5h-8L8 14z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }
  if (name === 'chart') {
    return (
      <svg {...common}>
        <path d="M4 19h16M7 16V9M12 16V5M17 16v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'doc') {
    return (
      <svg {...common}>
        <path d="M7 3h7l5 5v13H7V3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 3v5h5M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'share') {
    return (
      <svg {...common}>
        <circle cx="6" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 11.2 15 7.2M8 12.8 15 16.8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }
  if (name === 'link') {
    return (
      <svg {...common}>
        <path d="M10 13a4 4 0 0 0 5.7 0l2-2a4 4 0 0 0-5.7-5.7l-1.1 1.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 11a4 4 0 0 0-5.7 0l-2 2a4 4 0 0 0 5.7 5.7l1.1-1.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'stack') {
    return (
      <svg {...common}>
        <path d="M12 4 4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'people') {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 18c.6-2.7 2.5-4 4.5-4s3.9 1.3 4.5 4M14 14.2c1.6 0 3.2.9 3.8 3.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'star') {
    return (
      <svg {...common}>
        <path d="M12 4.5 13.9 9l4.8.5-3.6 3.2 1.1 4.7L12 15.4 7.8 17.4l1.1-4.7L5.3 9.5 10.1 9 12 4.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M7 7h4v4H7V7zm6 6h4v4h-4v-4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 11v2a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

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
          <a href="#benefits">導入効果</a>
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
            <p className="kicker">02 Munemo Assistant とは</p>
            <div className="about-grid">
              <article>
                <h2>行動の質を均一化するAIです。</h2>
                <p>
                  現場では、記録の書き方・行動の仕方・顧客対応の質が人によって大きく異なります。その結果、組織のナレッジは活用されず、改善が進まないまま属人的な業務が続きます。
                </p>
              </article>
              <article className="panel">
                <p>
                  Munemo Assistant は、
                  <strong>話すだけで記録を整理し、タグ付けし、ナレッジ化し、次の行動まで提案するAI。</strong>
                </p>
              </article>
              <article className="panel">
                <p>
                  汎用AIとは違い、
                  <strong>AIが人に合わせて進化する構造</strong>
                  を持ち、個人差・記録のばらつき・行動の抜け漏れを吸収します。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="band alt" id="why">
          <div className="wrap">
            <p className="kicker">03 Munemo Assistant の特徴</p>
            <h2>Why Munemo?</h2>
            <div className="reason-grid">
              {reasons.map((reason, index) => (
                <article key={reason.title}>
                  <div className="icon-circle">
                    <Icon name={reason.icon} />
                  </div>
                  <h3>
                    {index + 1}. {reason.title}
                  </h3>
                  <p>{reason.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="features">
          <div className="wrap">
            <p className="kicker">04 Munemo Assistant の機能</p>
            <h2>Features</h2>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.en}>
                  <div className="icon-circle">
                    <Icon name={feature.icon} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p className="en">{feature.en}</p>
                  {feature.list ? (
                    <ul className="mini-list">
                      {feature.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  <p>{feature.body}</p>
                  {feature.chips ? (
                    <div className="chips">
                      {feature.chips.map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band alt" id="value">
          <div className="wrap">
            <p className="kicker">05 Munemo Assistant の価値</p>
            <h2>Value Proposition</h2>
            <div className="value-grid">
              {values.map((value) => (
                <article key={value.title}>
                  <div className="icon-circle">
                    <Icon name={value.icon} />
                  </div>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="benefits">
          <div className="wrap benefits">
            <div>
              <p className="kicker">06 Munemo Assistant の導入効果</p>
              <h2>Benefits</h2>
            </div>
            <div className="benefits-layout">
              <div className="photo-card">
                <img src="/images/team.png" alt="チームで業務改善に取り組む様子" />
                <p>Better team. Better service.</p>
              </div>
              <ul>
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
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
