import { FileText, FileEdit, FileCheck, MessageSquare, Database, UserCheck, Link2, Rocket, BarChart3, Settings, Smartphone, ChevronRight } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "職務経歴書ドラフト生成",
      description: "面談会話から、候補者ごとの職務経歴書を自動生成",
    },
    {
      icon: FileEdit,
      title: "推薦文生成",
      description: "推薦時に使える文章を素早く作成",
    },
    {
      icon: FileCheck,
      title: "面談サマリ生成",
      description: "面談の要点を短時間で整理",
    },
    {
      icon: MessageSquare,
      title: "メッセージ生成",
      description: "面談後の送付メッセージを生成",
    },
    {
      icon: Database,
      title: "CRM自動反映",
      description: "事実情報を構造化し、CRMに反映",
    },
    {
      icon: UserCheck,
      title: "求職者プロファイリング",
      description: "面談ごとの情報を継続的に蓄積",
    },
    {
      icon: Link2,
      title: "求人マッチング",
      description: "転職軸に合った提案判断を支援",
    },
    {
      icon: Rocket,
      title: "次アクション提案",
      description: "誰に、何を、いつ行うべきかを提示",
    },
    {
      icon: BarChart3,
      title: "分析チャット",
      description: "現場・マネージャー・経営が必要な問いをすぐに確認",
    },
    {
      icon: Settings,
      title: "外部システム連携",
      description: "既存の業務環境に合わせて運用可能",
    },
    {
      icon: Smartphone,
      title: "携帯キャリア連携",
      description: "docomo・au・softbankの3大キャリアに対応",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/3 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm tracking-wide font-medium">Feature</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">人材紹介の決定プロセスを支える主な機能</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            現場で今すぐ使える自動化機能から、
            <br />
            提案・分析・学習につながる機能までを一気通貫で備えています。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              {/* KARTE-style icon circle */}
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-primary/8 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
