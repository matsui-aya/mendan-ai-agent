import { ChevronRight } from "lucide-react";
import { RoadmapIcon, StarsIcon, HeadphonesIcon } from "./icons/AgentIcons";

export default function SupportSection() {
  const supports = [
    {
      Icon: RoadmapIcon,
      title: "出力品質・項目チューニング",
      description: "現場で使える精度まで、出力フォーマットや反映項目を調整します。",
    },
    {
      Icon: StarsIcon,
      title: "現場定着支援",
      description: "CA・マネージャーが無理なく使えるよう、運用設計と活用方法を支援します。",
    },
    {
      Icon: HeadphonesIcon,
      title: "成果レビュー",
      description: "業務改善効果と活用状況を振り返り、次の拡張ポイントを整理します。",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm tracking-wide font-medium">Onboarding・Support</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            導入して終わりではなく、
            <br />
            定着と成果創出まで伴走します。
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {supports.map((support, index) => (
            <div key={index} className="group">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto text-primary">
                  <support.Icon className="w-full h-full" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                {support.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center">
                {support.description}
              </p>
              <div className="text-center">
                <button type="button" className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                  詳しく見る
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
