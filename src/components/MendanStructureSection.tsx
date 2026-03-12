import { Mic, FileText, Database, Rocket } from "lucide-react";

export default function MendanStructureSection() {
  const steps = [
    {
      number: "1",
      icon: Mic,
      title: "面談会話を取得する",
      description: "初回面談の音声・会話内容をデータ変換。",
    },
    {
      number: "2",
      icon: FileText,
      title: "業務に使える形に構造化する",
      description: "職務経歴書、CRM項目、意思決定軸、キャリア志向性、コンピテンシーへとプロファイリング",
    },
    {
      number: "3",
      icon: Database,
      title: "CRMとMENDAN基盤へ保存する",
      description: "現場で使う情報はCRMへ、決定率再現性データを資産に。運用を変更せずに始められます。",
    },
    {
      number: "4",
      icon: Rocket,
      title: "提案・フォロー・分析へ活用する",
      description: "誰に何を提案すべきか、誰をどうフォローすべきか、どこで歩留まりが落ちているかまでつなげます。",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* KARTE-style organic background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 -translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MENDANは、面談の会話を
            <br />
            "決定につながるデータ資産"に変えます。
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            会話を文字起こしして終わるのではなく、業務で使える形に構造化し、現場で使う情報はCRMへ、決定に効く再現性データを蓄積。
            <br />
            入力補助で終わらず、提案・実行・再現性までつながるのがMENDANです。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                {/* KARTE-style icon with number badge */}
                <div className="relative w-20 h-20 mx-auto mb-5">
                  <div className="absolute inset-0 bg-primary/8 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
              {/* Connection arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/40 z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
