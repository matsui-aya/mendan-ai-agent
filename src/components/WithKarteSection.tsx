import { DocumentAgentIcon, CRMAgentIcon, ProfileAgentIcon, MatchingAgentIcon, ProposalAgentIcon } from "./icons/AgentIcons";

export default function WithKarteSection() {
  const agents = [
    {
      Icon: DocumentAgentIcon,
      title: "書類作成エージェント",
      description: "職務経歴書ドラフト、推薦文、面談サマリを自動生成。面談後に発生するノンコア業務を減らし、候補者と向き合う時間を増やします。",
    },
    {
      Icon: CRMAgentIcon,
      title: "CRM連携エージェント",
      description: "会話で出た事実情報を構造化し、CRMへ反映。入力モレや属人的な記載を減らし、あとで使えるデータを残します。",
    },
    {
      Icon: ProfileAgentIcon,
      title: "プロファイルエージェント",
      description: "意思決定軸・キャリア志向性・コンピテンシーを可視化。履歴書だけでは見えない「決定に効く情報」を構造化します。",
    },
    {
      Icon: MatchingAgentIcon,
      title: "マッチングエージェント",
      description: "求職者の軸と、求人ごとの要件・決定傾向をもとに、単なる条件一致ではなく、内定可能性も踏まえた相性の高い求人と求職者をマッチング。",
    },
    {
      Icon: ProposalAgentIcon,
      title: "決定提案エージェント",
      description: "CRMに蓄積された会話データをもとに、誰に、何を、どう提案・フォローすれば決定しやすいかをチャット形式で提示。現場の次アクションから、マネージャー・経営の判断まで支援します。",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            4つのAIエージェントが、
            <br />
            初回面談から決定までをつなぎます。
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MENDANは、単一機能の自動化ツールではありません。
            <br />
            面談後の業務、CRM連携、求職者理解、決定提案までを、役割の異なるAIエージェントが支えます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-20 h-20 mx-auto mb-5 text-primary">
                  <agent.Icon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  {agent.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                  {agent.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
