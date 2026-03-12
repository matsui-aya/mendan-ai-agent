import { CAPersonIcon, ManagerIcon, ExecutiveIcon } from "./icons/SectionIcons";

export default function RoleValueSection() {
  const roles = [
    {
      Icon: CAPersonIcon,
      title: "CAには",
      description: "面談後の作業が減り、候補者と向き合う時間が増える。次にやるべきことが明確になり、初動の速さと提案の質が上がります。",
    },
    {
      Icon: ManagerIcon,
      title: "マネージャーには",
      description: "担当者ごとのばらつきや歩留まりの落ちどころが見える。フィードバックが感覚ではなく、面談データに基づくものに変わります。",
    },
    {
      Icon: ExecutiveIcon,
      title: "経営には",
      description: "どの業務が決定率に効いているかを見極め、属人化した勝ちパターンを、組織で再現できる仕組みに変えられます。",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/3 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            現場の会話が、
            <br />
            行動・マネジメント・経営判断につながる。
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-28 h-28 mx-auto mb-6 text-primary">
                <role.Icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {role.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
