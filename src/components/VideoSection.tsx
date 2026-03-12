import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] -translate-y-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm tracking-wide font-medium">Demo</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            1分でわかる、MENDANの流れ
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            面談会話の取り込みから、書類生成、CRM反映、求職者理解の構造化、
            <br />
            次アクション提示までの一連の流れを短いデモでご覧いただけます。
          </p>
        </div>

        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden group cursor-pointer border border-gray-200 shadow-xl">
          {/* Background illustration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-xl" />
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-150 animate-pulse" />
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Flow Steps as decorative elements */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            {["面談会話", "書類生成", "CRM反映", "次アクション"].map((step, i) => (
              <span key={step} className="bg-white/90 text-gray-700 text-xs px-3 py-1.5 rounded-full shadow-sm border border-gray-100 backdrop-blur-sm">
                <span className="text-primary font-medium mr-1">{i + 1}.</span>
                {step}
              </span>
            ))}
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span className="text-sm text-gray-600">再生時間: 約1分</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 bg-white inline-block px-6 py-3 rounded-full shadow-sm border border-gray-100">
            まずは面談後の業務の削減から。
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            その先で、提案と決定率の再現性向上までつなげていきます。
          </p>
        </div>
      </div>
    </section>
  );
}
