import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#1F2937]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          まずは、面談後の業務をなくすところから始めませんか。
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          書類作成と入力業務の削減を入口に、
          <br />
          求職者理解、提案、決定率改善まで広げられます。
          <br />
          <span className="text-white font-medium">MENDANが、初回面談を"決定につながるデータ"に変えます。</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all duration-200 shadow-lg"
          >
            デモを予約する
          </Link>
          <Link
            href="#download"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-200"
          >
            資料をダウンロード
          </Link>
        </div>
      </div>
    </section>
  );
}
