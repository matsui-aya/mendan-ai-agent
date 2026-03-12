"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "どのような業務から始めるのが最適ですか？",
      answer: "最初は、職務経歴書ドラフト生成とCRM入力の自動化から始めるケースが多いです。導入効果が分かりやすく、現場にも受け入れられやすいため、そこから求職者理解や提案支援へ広げていけます。",
    },
    {
      question: "AIの出力はそのまま使えますか？",
      answer: "事実ベースの情報整理やドラフト生成は高い自動化率で活用できます。一方で、最終提案や対外コミュニケーションなど判断が必要な部分は、人の確認を前提に運用できます。",
    },
    {
      question: "今使っているCRMや業務フローは変わりますか？",
      answer: "大きく変える必要はありません。現場で使う情報は既存のCRMへ反映し、裏側で必要な構造化データを活用する設計にできるため、運用を変えすぎずに始められます。",
    },
    {
      question: "どこまで分析に活用できますか？",
      answer: "現場の次アクション支援から、マネージャーの歩留まり分析、経営の再現因子の把握まで、段階的に活用できます。まずは業務改善、その先で決定率改善へとつなげる設計です。",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm tracking-wide font-medium">FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
