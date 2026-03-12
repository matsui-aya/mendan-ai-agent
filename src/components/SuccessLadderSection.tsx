export default function SuccessLadderSection() {
  const steps = [
    {
      step: "STEP 1",
      title: "面談後の業務を減らす",
      description: "書類作成と入力業務を減らし、面談後に奪われていた時間を取り戻します。",
      color: "from-primary/10",
    },
    {
      step: "STEP 2",
      title: "求職者理解を標準化する",
      description: "会話からしか取れない情報を、担当者個人ではなく組織の資産として残します。",
      color: "from-primary/20",
    },
    {
      step: "STEP 3",
      title: "提案・フォロー精度を上げる",
      description: "誰に何をどう動くべきかが分かり、提案の質と初動スピードが上がります。",
      color: "from-primary/30",
    },
    {
      step: "STEP 4",
      title: "決定率を底上げする",
      description: "ベテラン依存を減らし、再現性高く成果を出せるチームづくりにつなげます。",
      color: "from-primary/40",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] translate-y-1/2 translate-x-1/4">
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            まずは業務改善。
            <br />
            その先で、決定率の再現性へ。
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MENDANは、いきなり大きな変革を求めません。
            <br />
            まずは面談後の業務を減らし、そこから求職者理解、提案支援、決定率改善へと段階的に広げられます。
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-16 left-8 right-8 h-1">
            <div className="h-full bg-gradient-to-r from-primary/20 via-primary/50 to-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className={`bg-gradient-to-b ${item.color} to-white rounded-2xl p-6 h-full border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl`}>
                  {/* Step number with growing circle */}
                  <div className="relative w-14 h-14 mx-auto mb-4">
                    <div className="absolute inset-0 bg-primary/10 rounded-full" />
                    <div className="absolute inset-1 bg-white rounded-full shadow-sm flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-xs text-primary font-medium mb-2 text-center">{item.step}</p>
                  <h3 className="text-base font-bold text-gray-900 mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-medium text-gray-900 bg-white inline-block px-6 py-3 rounded-full shadow-sm border border-gray-100">
            最初は時間を生み、最終的には決定を変える。
          </p>
        </div>
      </div>
    </section>
  );
}
