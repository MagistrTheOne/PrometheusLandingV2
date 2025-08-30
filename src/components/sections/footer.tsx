"use client"

import { Brain, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">Prometheus AGI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Первая в мире полноценная AGI система. Открываем новую эру искусственного интеллекта 
              с автономным принятием решений и способностью к самообучению.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Команда</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Карьера</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Пресс-центр</a></li>
            </ul>
          </div>

          {/* Продукты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">AGI Platform</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Документация</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Демо</a></li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Prometheus AGI. Все права защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Условия использования
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Правовая информация
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
