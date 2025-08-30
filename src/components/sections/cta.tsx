"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin, Brain } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Готовы к будущему?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Присоединяйтесь к <span className="gradient-text">революции AGI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
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
          <div className="bg-background p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Для инвесторов</h3>
            <p className="text-muted-foreground mb-6">
              Уникальная возможность инвестировать в первую в мире AGI систему. 
              Высокий потенциал роста и стратегическое партнерство.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Минимальная инвестиция: $100K</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Ожидаемый ROI: 500%+</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Выход: 3-5 лет</span>
              </div>
            </div>
            <Button size="lg" variant="gradient" className="w-full mt-6">
              Инвестировать сейчас
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="bg-background p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Для партнеров</h3>
            <p className="text-muted-foreground mb-6">
              Интегрируйте Prometheus AGI в ваши системы. 
              Получите конкурентное преимущество с передовой технологией.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>API интеграция</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Техническая поддержка</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Кастомизация под ваши нужды</span>
              </div>
            </div>
            <Button size="lg" variant="outline" className="w-full mt-6">
              Заказать демо
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Контакты */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-lg border border-border p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Свяжитесь с нами</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground">contact@prometheus-agi.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Телефон</h4>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Адрес</h4>
              <p className="text-muted-foreground">Москва, Россия</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
