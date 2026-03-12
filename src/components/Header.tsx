"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "製品・機能", hasDropdown: true },
    { label: "業種別活用", hasDropdown: true },
    { label: "導入事例", href: "#cases" },
    { label: "料金", href: "#pricing" },
    { label: "資料・お役立ち", hasDropdown: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - 画像を配置する場合はここを編集 */}
          <Link href="/" className="flex items-center">
            {/*
              ロゴ画像を使用する場合：
              1. public/logo.png に画像を配置
              2. 下記のコメントを外して、テキストロゴを削除
            */}
            {/* <Image
              src="/logo.png"
              alt="MENDAN"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            /> */}

            {/* テキストロゴ（画像使用時は削除） */}
            <div className="flex items-center gap-2">
              {/* アイコン用画像BOX（オプション） */}
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">MENDAN</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              お問い合わせ
            </Link>
            <Link
              href="#download"
              className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-full transition-all duration-200"
            >
              資料ダウンロード
            </Link>
            <Link
              href="#demo"
              className="px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              デモを予約する
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <Link
                href="#contact"
                className="block px-3 py-2 text-center text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                お問い合わせ
              </Link>
              <Link
                href="#download"
                className="block px-3 py-2 text-center text-gray-700 border border-gray-300 rounded-full transition-colors"
              >
                資料ダウンロード
              </Link>
              <Link
                href="#demo"
                className="block px-3 py-2.5 text-center text-white bg-primary rounded-full"
              >
                デモを予約する
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
