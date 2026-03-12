import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            まずは、面談後の業務改善からご体験ください。
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            初回面談後の職務経歴書ドラフトとCRM入力を、どこまで減らせるか。
            <br />
            実際の出力イメージと連携方法を、デモでご確認いただけます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-medium rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg"
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
      </div>
    </section>
  );
}
