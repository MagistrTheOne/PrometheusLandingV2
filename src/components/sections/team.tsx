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
    <section className="py-20 bg-gray-900">
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
            <span className="text-white">Команда экспертов</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="bg-black p-8 rounded-lg border border-gray-800 hover:border-white/50 transition-all duration-300 max-w-2xl mx-auto"
            >
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center text-white">{member.name}</h3>
              <p className="text-white font-medium mb-4 text-center text-lg">{member.role}</p>
              <div className="text-center space-y-2">
                <p className="text-gray-300">{member.expertise}</p>
                <p className="text-sm text-gray-300">{member.experience}</p>
                <p className="text-sm text-white font-medium">{member.achievements}</p>
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
            <span className="text-white">Инвестиционные раунды</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="bg-black p-6 rounded-lg border border-gray-800 relative overflow-hidden"
            >
              {round.status === "В процессе" && (
                <div className="absolute top-0 right-0 bg-white text-black px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Активный
                </div>
              )}
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{round.round}</h3>
              <p className="text-3xl font-bold mb-4 text-white">{round.amount}</p>
              <p className="text-gray-300 mb-3">{round.status}</p>
              <p className="text-sm text-gray-300 mb-2">{round.investors}</p>
              <p className="text-sm text-white">{round.use}</p>
            </motion.div>
          ))}
        </div>

        {/* Ключевые достижения */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-black rounded-lg border border-gray-800 p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Ключевые достижения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">15+ патентов</h4>
              <p className="text-gray-300">Уникальные технологии</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">5 стран</h4>
              <p className="text-gray-300">Глобальное присутствие</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">13+ сертификатов</h4>
              <p className="text-gray-300">Экспертиза в ИИ</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">$50M+</h4>
              <p className="text-gray-300">Рыночная оценка</p>
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
