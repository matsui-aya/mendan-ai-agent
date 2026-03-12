import { User, Briefcase, MessageCircle } from "lucide-react";

export default function AnalyticsSection() {
  const actions = [
    { icon: User, text: "今日フォローすべき候補者は誰か" },
    { icon: Briefcase, text: "どの求人を提案すべきか" },
    { icon: MessageCircle, text: "どんな訴求で意思形成すべきか" },
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            分析で終わらず、
            <br />
            今日の打ち手まで返る。
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MENDANはダッシュボードで終わりません。
            <br />
            会話データをもとに、候補者ごとの優先アクションと、提案・フォローに必要な判断材料まで返します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {actions.map((action, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-bg rounded-xl flex items-center justify-center mb-4">
                <action.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-gray-900 font-medium">{action.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <p className="text-gray-600 text-center leading-relaxed">
            現場が欲しいのは、分析結果そのものではなく、
            <br />
            <span className="font-medium text-gray-900">「誰に、何を、どう動くか」</span>です。
            <br />
            MENDANは、その一手までを具体化します。
          </p>
        </div>
      </div>
    </section>
  );
}
