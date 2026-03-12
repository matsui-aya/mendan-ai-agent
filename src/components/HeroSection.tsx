"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-white relative overflow-hidden">
      {/* KARTE-style organic background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/4 translate-x-1/4">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] translate-y-1/4 -translate-x-1/4">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute top-32 left-10 w-2 h-2 bg-primary/30 rounded-full" />
      <div className="absolute top-48 left-20 w-3 h-3 bg-primary/20 rounded-full" />
      <div className="absolute bottom-32 right-20 w-2 h-2 bg-primary/40 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-primary mb-4">人材紹介会社向けAIエージェント</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-tight mb-6">
              面談後の業務を自動化し、
              <br />
              会話を決定につながる
              <br />
              データ資産に。
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              初回面談の会話から、職務経歴書ドラフト、CRM入力、意思決定軸・キャリア志向性・コンピテンシーの構造化までを一気通貫。
              <br />
              <span className="mt-2 block">
                まずは工数とリードタイムを削減し、その先で提案・フォロー・決定率の再現性を高めます。
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                デモを予約する
              </Link>
              <Link
                href="#download"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-full transition-all duration-200 border-2 border-gray-300 hover:border-gray-400"
              >
                資料をダウンロード
              </Link>
            </div>
            {/* Feature Labels */}
            <div className="flex flex-wrap gap-3">
              {[
                "職務経歴書ドラフトを自動生成",
                "会話からCRMへ自動連携",
                "求職者理解を構造化",
                "次アクションまで支援",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-3 py-1.5 bg-primary-bg text-primary text-sm font-medium rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - AI Flow Visualization with KARTE style */}
          <div className="relative">
            {/* Main organic shape background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-[3rem] -rotate-3 scale-105" />

            <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm p-8 shadow-2xl border border-gray-100/50">
              {/* Step 1: 会話をデータ変換 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">会話をデータ変換</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-3">
                <ArrowDown className="w-5 h-5 text-primary" />
              </div>

              {/* Step 2: 3 outputs */}
              <div className="space-y-3 mb-4">
                {[
                  { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "職務経歴書ドラフト生成" },
                  { icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", text: "CRM反映候補を作成" },
                  { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", text: "求職者理解を構造化" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-3 flex items-center gap-3 border border-gray-100"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-3">
                <ArrowDown className="w-5 h-5 text-primary" />
              </div>

              {/* Step 3: Next Action */}
              <div className="bg-primary text-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1">次にやるべきアクションを提示</p>
                    <p className="text-xs text-white/80">誰に、何を、どう提案すべきかを具体化</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats with KARTE style */}
            <div className="absolute -right-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block border border-gray-100">
              <div className="text-primary text-2xl font-bold">1分で</div>
              <div className="text-xs text-gray-500 whitespace-nowrap">書類自動生成</div>
            </div>

            <div className="absolute -left-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block border border-gray-100">
              <div className="text-primary text-2xl font-bold">10h+</div>
              <div className="text-xs text-gray-500 whitespace-nowrap">月間業務改善</div>
            </div>

            {/* Additional decorative element */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
