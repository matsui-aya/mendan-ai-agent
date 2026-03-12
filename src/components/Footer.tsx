import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const footerLinks: Record<string, FooterSection> = {
    product: {
      title: "製品",
      links: [
        { label: "機能一覧", href: "#features" },
        { label: "料金プラン", href: "#pricing" },
        { label: "導入事例", href: "#cases" },
        { label: "よくある質問", href: "#faq" },
      ],
    },
    solutions: {
      title: "ソリューション",
      links: [
        { label: "人材紹介会社向け", href: "#" },
        { label: "中途採用支援", href: "#" },
        { label: "ヘッドハンティング", href: "#" },
        { label: "RPO事業者向け", href: "#" },
      ],
    },
    resources: {
      title: "お役立ち資料",
      links: [
        { label: "業務改善事例集", href: "#" },
        { label: "導入ガイド", href: "#" },
        { label: "セミナー・イベント", href: "#events" },
        { label: "ブログ", href: "#blog" },
      ],
    },
    company: {
      title: "会社情報",
      links: [
        { label: "運営会社", href: "#about" },
        { label: "お知らせ", href: "#news" },
        { label: "お問い合わせ", href: "#contact" },
        { label: "採用情報", href: "#careers" },
      ],
    },
    support: {
      title: "サポート",
      links: [
        { label: "ヘルプセンター", href: "#" },
        { label: "導入サポート", href: "#" },
        { label: "API ドキュメント", href: "#", external: true },
        { label: "システムステータス", href: "#", external: true },
      ],
    },
  };

  return (
    <>
      {/* Tagline before footer */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-medium text-gray-700">
            人材紹介の決定プロセスを、会話データから変える。
          </p>
        </div>
      </section>

      <footer className="py-16 bg-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Description */}
          <div className="mb-12">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">MENDAN</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              人材紹介会社向けAIエージェント。
              <br />
              面談後の業務を自動化し、会話を決定につながるデータ資産に。
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-sm font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        {link.external && (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Links */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-xs text-gray-500">
              <Link href="#" className="hover:text-gray-300 transition-colors">利用規約</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">プライバシーポリシー</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">特定商取引法に基づく表記</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">セキュリティ</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">情報セキュリティ基本方針</Link>
            </div>
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} MENDAN. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
