import { ClockProblemIcon, EyeHiddenIcon, PeopleScatterIcon } from "./icons/SectionIcons";

export default function WithoutKarteSection() {
  const problems = [
    {
      Icon: ClockProblemIcon,
      title: "面談後の業務が重く、初動が遅れる",
      description: "職務経歴書、推薦文、CRM入力に時間を取られ、候補者への次の接触が後ろ倒しに",
    },
    {
      Icon: EyeHiddenIcon,
      title: "会話からしか知れない情報が埋もれる",
      description: "転職軸、キャリア観、本音の懸念が担当者の頭の中にしか残らず、提案やフォローに活かしきれない",
    },
    {
      Icon: PeopleScatterIcon,
      title: "提案とフォローが属人化する",
      description: "同じ候補者でも、誰が担当するかで提案の質やクロージングの精度が変わり、決定率にばらつきが生まれる",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-red-100/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            決定率が伸びない本当の理由は、
            <br />
            面談直後の情報が残らないこと。
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            人材紹介の成果は、面談の質だけでは決まりません。
            <br />
            面談後のアクション、情報の構造化、初動の速さが、提案とフォローの質を大きく左右します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-24 h-24 mx-auto mb-6 text-red-500">
                <problem.Icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
