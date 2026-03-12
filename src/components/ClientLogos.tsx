import Link from 'next/link';

export default function ClientLogos() {
  const clients = [
    "人材紹介A社", "人材紹介B社", "人材紹介C社", "人材紹介D社",
    "人材紹介E社", "人材紹介F社", "人材紹介G社", "人材紹介H社",
    "人材紹介I社", "人材紹介J社", "人材紹介K社", "人材紹介L社",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            面談後の業務の削減を起点に、幅広い人材紹介会社で導入が進んでいます。
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            小規模チームから大手まで、まずは書類作成と入力業務の削減から。
            <br />
            導入後は、求職者理解、提案支援、決定率の再現性へと段階的に活用が広がっています。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="w-full h-16 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors text-xs font-medium text-center px-2 bg-gray-50 rounded-lg"
            >
              {client}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#cases"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
          >
            導入事例を見る
            <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
