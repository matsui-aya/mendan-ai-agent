import { SpeedIcon, TimeIcon, CalendarIcon } from "./icons/SectionIcons";

export default function StatsSection() {
  const stats = [
    {
      Icon: SpeedIcon,
      value: "1分で",
      label: "職務経歴書・推薦文を自動生成"
    },
    {
      Icon: TimeIcon,
      value: "10〜15時間",
      subValue: "/ 月",
      label: "1人あたりの業務改善"
    },
    {
      Icon: CalendarIcon,
      value: "6〜12日",
      subValue: "短縮",
      label: "初回面談から次工程までのリードタイム"
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm tracking-wide font-medium">導入効果の一例</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-bg to-white rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-20 h-20 mx-auto mb-4 text-primary">
                <stat.Icon className="w-full h-full" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
                {stat.subValue && (
                  <span className="text-xl md:text-2xl text-primary/70">{stat.subValue}</span>
                )}
              </div>
              <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
