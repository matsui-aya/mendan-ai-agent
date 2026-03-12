import { TargetIcon, CompassIcon, ChartPersonIcon } from "./icons/SectionIcons";

export default function NoCodeSection() {
  const dataTypes = [
    {
      Icon: TargetIcon,
      title: "意思決定軸",
      description: "何を優先して転職先を選ぶのか。年収、働き方、成長環境、安定性など、意思決定の順番を捉えます。",
    },
    {
      Icon: CompassIcon,
      title: "キャリア志向性",
      description: "どんな環境・役割で力を発揮しやすいのか。短期の希望条件ではなく、中長期のキャリア観を把握します。",
    },
    {
      Icon: ChartPersonIcon,
      title: "コンピテンシー",
      description: "通過・活躍に関わる行動特性は何か。求人との相性や、決定しやすさの見立てに使える情報を残します。",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] -translate-y-1/2 -translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            議事録AIで終わらない。
            <br />
            決定に効く3つの情報まで残します。
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MENDANが残すのは、データ資産です。
            <br />
            履歴書にもCRMの自由記述にも残りにくい情報を、提案とフォローに使える粒度で構造化します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {dataTypes.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-28 h-28 mx-auto mb-6 text-primary">
                <item.Icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-gray-900 bg-primary-bg inline-block px-6 py-3 rounded-full">
            だから、求人提案がスキル一致だけで終わらない。
          </p>
        </div>
      </div>
    </section>
  );
}
