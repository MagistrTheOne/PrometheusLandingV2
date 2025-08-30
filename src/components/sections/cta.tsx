"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Готовы к будущему?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Присоединяйтесь к <span className="text-white">революции AGI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Станьте частью истории создания первой в мире AGI системы.
            Инвестируйте в будущее технологий сегодня.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-black p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-white">Для инвесторов</h3>
            <p className="text-gray-300 mb-6">
              Уникальная возможность инвестировать в первую в мире AGI систему.
              Высокий потенциал роста и стратегическое партнерство.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white">Минимальная инвестиция: $1M</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white">Ожидаемый ROI: 500%+</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white">Выход: 3-5 лет</span>
              </div>
            </div>
            <a 
              href="https://www.linkedin.com/in/magistrtheone/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="gradient" className="w-full text-lg px-8 py-4 bg-white text-black hover:bg-gray-100">
                Инвестировать сейчас
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="bg-black p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-white">Для партнеров</h3>
            <p className="text-gray-300 mb-6">
              Интегрируйте Prometheus AGI в ваши системы.
              Получите конкурентное преимущество с передовой технологией.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white">API интеграция</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white">Техническая поддержка</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white">Кастомизация под ваши нужды</span>
              </div>
            </div>
            <a 
              href="https://www.linkedin.com/in/magistrtheone/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="w-full text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                Заказать демо
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Контакты */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-lg border border-gray-800 p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Свяжитесь с нами</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Email</h4>
              <a 
                href="mailto:maxonyushko71@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                maxonyushko71@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Телефон</h4>
              <a 
                href="tel:+79884135937" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                +7 988 413 59 37
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Адрес</h4>
              <p className="text-gray-300">Краснодар, Россия</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">LinkedIn</h4>
              <a 
                href="https://www.linkedin.com/in/magistrtheone/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                MagistrTheOne
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
