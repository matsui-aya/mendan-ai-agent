import { HearingIcon, DocumentCheckIcon, ConnectIcon, PilotIcon, LaunchIcon } from "./icons/SectionIcons";

export default function FlowSection() {
  const steps = [
    {
      Icon: HearingIcon,
      title: "ヒアリング",
      description: "現状の面談後の業務、CRM運用、出力フォーマットを確認します。"
    },
    {
      Icon: DocumentCheckIcon,
      title: "要件整理",
      description: "職務経歴書、推薦文、CRM反映項目など、必要な出力を設計します。"
    },
    {
      Icon: ConnectIcon,
      title: "連携設定",
      description: "面談データの取り込みと、既存環境への接続を整えます。"
    },
    {
      Icon: PilotIcon,
      title: "パイロット運用",
      description: "まずは一部チーム・一部業務から始め、運用に合わせて調整します。"
    },
    {
      Icon: LaunchIcon,
      title: "本格展開",
      description: "面談後の業務から、求職者理解、提案支援、分析活用へと広げていきます。"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm tracking-wide font-medium">Flow</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            現場の運用を変えすぎずに、導入できます。
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            今お使いの業務フローやCRM運用に合わせて、
            <br />
            小さく始めて段階的に広げられる導入設計です。
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 text-primary relative">
                    <step.Icon className="w-full h-full" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shadow">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-2">{step.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-primary/30 z-20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
