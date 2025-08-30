"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Prometheus AGI Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-white">Prometheus AGI</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Первая в мире полноценная AGI система. Открываем новую эру искусственного интеллекта 
              с автономным принятием решений и способностью к самообучению.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Команда</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Пресс-центр</a></li>
            </ul>
          </div>

          {/* Продукты */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Продукты</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AGI Platform</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Документация</a></li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Prometheus AGI. Все права защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Условия использования
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Правовая информация
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
