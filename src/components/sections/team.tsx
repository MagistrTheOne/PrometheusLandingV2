"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Globe, TrendingUp } from "lucide-react"

const teamMembers = [
  {
    name: "MagistrTheOne (Онюшко Максим)",
    role: "Founder & Разработчик",
    expertise: "Искусственный интеллект, AGI разработка",
    experience: "10+ лет в AI/ML",
    achievements: "13+ сертификатов в области ИИ"
  }
]

const investmentRounds = [
  {
    round: "Seed",
    amount: "$2M",
    status: "Завершен",
    investors: "AI Ventures, Tech Angels",
    use: "Разработка MVP, команда"
  },
  {
    round: "Series A",
    amount: "$10M",
    status: "В процессе",
    investors: "Global AI Fund, Dubai Corp",
    use: "Масштабирование, R&D"
  },
  {
    round: "Series B",
    amount: "$50M",
    status: "Планируется",
    investors: "Strategic Partners",
    use: "Глобальная экспансия"
  }
]

export function TeamSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Команда */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Команда экспертов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мировые лидеры в области искусственного интеллекта с опытом в ведущих технологических компаниях
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 max-w-2xl mx-auto"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">{member.name}</h3>
              <p className="text-primary font-medium mb-4 text-center text-lg">{member.role}</p>
              <div className="text-center space-y-2">
                <p className="text-muted-foreground">{member.expertise}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
                <p className="text-sm text-accent font-medium">{member.achievements}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Инвестиции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Инвестиционные раунды</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Стратегическое партнерство с ведущими инвесторами и корпорациями
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {investmentRounds.map((round, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg border border-border relative overflow-hidden"
            >
              {round.status === "В процессе" && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Активный
                </div>
              )}
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2 gradient-text">{round.round}</h3>
              <p className="text-3xl font-bold mb-4">{round.amount}</p>
              <p className="text-muted-foreground mb-3">{round.status}</p>
              <p className="text-sm text-muted-foreground mb-2">{round.investors}</p>
              <p className="text-sm text-primary">{round.use}</p>
            </motion.div>
          ))}
        </div>

        {/* Ключевые достижения */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-background rounded-lg border border-border p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Ключевые достижения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">15+ патентов</h4>
              <p className="text-muted-foreground">Уникальные технологии</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-2">5 стран</h4>
              <p className="text-muted-foreground">Глобальное присутствие</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">13+ сертификатов</h4>
              <p className="text-muted-foreground">Экспертиза в ИИ</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-2">$50M+</h4>
              <p className="text-muted-foreground">Рыночная оценка</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="gradient" className="text-lg px-8 py-4">
            Стать инвестором
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
